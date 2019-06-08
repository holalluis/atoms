/* Ray tracing */
#include <stdio.h>
#include <math.h>
#include <strings.h>
#include <GLUT/glut.h>
#include "classes.h"

//Variables globals
#define maxEsferes 5
Escena escena;                //coleccio de esferes
int k;                        //num de hits
int ample = 500, llarg = 500; //pantalla de 500x500=250000 pixels
Punt punts[ample*llarg];      //pantalla: posicio pixel
Color colors[ample*llarg];    //pantalla: color pixel
Punt llum(0,250,-200);        //focus de llum
Color I(1,1,1);               //color de la llum
Punt camera(0,0,-5500);       //Defineixo on és la càmera

//populate escena
void defineixEscena(){
  //sintaxi: esfera(centre, radi, color, material)
  Esfera esfera1(new Punt(0,-20,0),       100, new Color(1,0.2,0.2), new Material(1,1)); escena.afegir(esfera1);
  Esfera esfera2(new Punt(125,0,100),     50,  new Color(0.2,1,0.2), new Material(1,1)); escena.afegir(esfera2);
  Esfera esfera3(new Punt(-100,-20,-100), 50,  new Color(0.2,0.2,1), new Material(1,1)); escena.afegir(esfera3);
  Esfera esfera4(new Punt(100,-50,-100),  30,  new Color(0.5,0.5,0), new Material(1,1)); escena.afegir(esfera4);
}

// Funcions
  //troba interseccio entre una recta r i l'escena
  Punt intersecta(Recta r, Escena e){
    Punt p(0,0,9999);
    p.hit=false;
    int i;
    int numEsferes=e.numEsferes;
    //el raig
    float x0 = r.punt.x;
    float y0 = r.punt.y;
    float z0 = r.punt.z;
    float vx = r.director.x;
    float vy = r.director.y;
    float vz = r.director.z;
    //parametres esfera i eq de segon grau
    float R,xE,yE,zE,a,b,c,discriminant;
    //solucio per cada esfera
    float d_1, d_2, d;
    float x[maxEsferes], y[maxEsferes], z[maxEsferes];
    //calcula interseccio més proxima a cada esfera
    for(i=0;i<numEsferes;i++){
      R = e.esferes[i].radi;
      xE = e.esferes[i].centre.x;
      yE = e.esferes[i].centre.y;
      zE = e.esferes[i].centre.z;
      /*
        esfera : (x-xE)^2 + (y-yE)^2 + (z-zE)^2 = R^2
        recta (eq parametrica, d):
          x = x0 + d · vx
          y = y0 + d · vy
          z = z0 + d · vz
        eq a resoldre:
        (d·vx + x0-xE)^2 + (d·vy + y0-yE)^2 + (d·vz + z0-zE)^2 = R^2
        desenvolupament
        (d·vx)^2+ 2(d·vx)(x0-xE) + (x0-xE)^2+(d·vy)^2+2(d·vy)(y0-yE) + (y0-yE)^2 + (d·vz)^2 + 2(d·vz)(z0-zE) + (z0-zE)^2 = R^2
        (vx^2 + vy^2 + vz^2)·d^2 + 2(vx·(x0-xE)+vy·(y0-yE)+vz·(z0-zE))·d + (x0-xE)^2+(y0-yE)^2+(z0-zE)^2 = R^2
        equacio de segon grau a·d^2 + b·d + c = 0
      */
      a = vx*vx + vy*vy + vz*vz;
      b = 2*(vx*(x0-xE) + vy*(y0-yE) + vz*(z0-zE));
      c = powf(x0-xE,2) + powf(y0-yE,2) + powf(z0-zE,2) - R*R;
      discriminant = b*b - 4*a*c;
      if(discriminant >= 0){
        p.hit = true;
        //calcula les 2 solucions
        d_1 = (-b + sqrt(discriminant))/(2*a);
        d_2 = (-b - sqrt(discriminant))/(2*a);
        //calcula el punt més proxim de les dues solucions
        if(d_1 < d_2){
          d=d_1;
        }else{
          d=d_2;
        }
        //calcula x i y
        x[i] = x0+d*vx;
        y[i] = y0+d*vy;
        z[i] = z0+d*vz;
        //retorna el més proper
        if(z[i]<p.z){
          escena.esferaActual = e.esferes[i];
          p.x = x[i];
          p.y = y[i];
          p.z = z[i];
        }
      }
    }
    return p;
  }

  Color calculaColor(Punt p, Esfera e, Punt llum){
    // color = ambient + difus + especular
      Color c(0,0,0);
    //ambient
      c = c + e.color*0.65;
    //difusa
      //calculem la normal
      Vector normal(e.centre, p);
      //normal.normalitzar();
      //calculem el vector llum-interseccio
      Vector L(p, llum);
      //L.normalitzar();
      //calculem el cosinus entre els dos vectors
      float cosO = normal.prodEsc(L) / (normal.modul() * L.modul() );
      //afegim el component difús
      c = c + e.color * cosO;
    //especular
      //raig des de ull a p
      //Vector raig(camera, p);
      //raig.normalitzar();
      // vector reflexat
      //Vector R = (normal*cosO*2.0) - L;
      //float cosP = R.prodEsc(raig);
      c = c + I * powf(cosO,25);
    return c;
  }

  void reshape(int w, int h){
    glViewport(0, 0, w, h);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    //gluOrtho2D(0,w,0,h);
    glOrtho(0,w,0,h,-w,w);
    glMatrixMode(GL_MODELVIEW);
    ample=h;
    llarg=w;
  }

  void rayTracing(){
    int i,j;
    // tira rajos des de la càmera a tots els pixels
    Punt p;
    Color background(0,0,0);
    k=0;
    for(i=0;i<ample;i++){
    for(j=0;j<llarg;j++){
      //punt pixel, vector pixel-càmera, raig
      Punt pix (i-ample/2,j-llarg/2,2200);
      Vector vector (camera, pix);
      vector.normalitzar();
      Recta raig(camera, vector);
      p = intersecta(raig, escena);
      if(p.hit){
        colors[k] = calculaColor (p, escena.esferaActual, llum );
        punts[k] = p;
        k++;
      }else{
        //p = pix;
        //colors[k] = background;
      }
        //punts[k] = p;
        //k++;
    }}
  }

  void render2d(void){
    int i;
    rayTracing();
    glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);
    glLoadIdentity();
    glTranslated(ample/2, llarg/2, 0);
    //dibuixa pixels
    glPointSize(1);
    glBegin(GL_POINTS);
      for(i=0;i<=k;i++){
        glColor3f(colors[i].R, colors[i].G, colors[i].B);
        glVertex2f(punts[i].x, punts[i].y); //punts[i].z);
      }
    glEnd();
    //dibuixa el focus
    glPointSize(30);
    glBegin(GL_POINTS);
      glColor3f(1,1,1);
      glVertex3f(llum.x,llum.y,llum.z);

    glEnd();
    glutSwapBuffers();
  }

  void keyboard(unsigned char key, int mouse_x, int mouse_y){
    float dist = 50.0;
    int i=0;
    switch(key){
      case 'w': llum.y += dist; break;
      case 's': llum.y -= dist; break;
      case 'a': llum.x -= dist; break;
      case 'd': llum.x += dist; break;
      case 'q': llum.z += dist; break;
      case 'e': llum.z -= dist; break;

      case 'i': escena.esferes[i].centre.y += dist; break;
      case 'k': escena.esferes[i].centre.y -= dist; break;
      case 'j': escena.esferes[i].centre.x -= dist; break;
      case 'l': escena.esferes[i].centre.x += dist; break;
      case 'u': escena.esferes[i].centre.z += dist; break;
      case 'o': escena.esferes[i].centre.z -= dist; break;
    }
    printf("Tecla: %c\n",key);
    printf("\033[A");
    glutPostRedisplay();
  }

/*main*/
int main(int argc, char **argv){
  defineixEscena();
  glutInit(&argc,argv);
  glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB| GLUT_DEPTH);
  glutInitWindowPosition(100,100);
  glutInitWindowSize(ample,llarg);
  glutCreateWindow("Ray Tracing");
  glutKeyboardFunc(keyboard);
  glutReshapeFunc(reshape);
  glutDisplayFunc(render2d);
  glutMainLoop();//start rendering
  return 0;
}
