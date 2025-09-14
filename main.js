import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//box
const Cubegeometry = new THREE.BoxGeometry( 4,4,4 );
const Cubematerial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( Cubegeometry, Cubematerial );
cube.position.set(3,1,0);
scene.add( cube );

//cone
const Conegeometry = new THREE.ConeGeometry(3,2,2, 200);
const Conematerial = new THREE.MeshBasicMaterial({color: 0x003500});
const cone = new THREE.Mesh(Conegeometry, Conematerial);
cone.position.set(3,6,11);
scene.add(cone);


//cylinder
const CylinderGeo = new THREE.CylinderGeometry(1, 2, 3);
//const cylpos = Mesh.position.set(2,2,2);
const CylinderMat = new THREE.MeshBasicMaterial({color: 0xCAD5CA});
const Cyl = new THREE.Mesh(CylinderGeo, CylinderMat);
    
Cyl.position.x = 2;
    Cyl.position.y = 10;
    Cyl.position.z = 2;
scene.add(Cyl);



 const spgeometry = new THREE.SphereGeometry(1, 32, 32);
    const spmaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const sphere = new THREE.Mesh(spgeometry, spmaterial);

    sphere.position.set(-3, 2, 3)
    scene.add(sphere);


camera.position.z = 25;

//torus
const torgeo = new THREE.TorusGeometry(1,1,3);
const tormat = new THREE.MeshBasicMaterial({color: 0xFF9797})
const torus = new THREE.Mesh(torgeo,tormat);
torus.position.set(-1,-1,1);
scene.add(torus);

function animate() {
    requestAnimationFrame(animate);
    //sphere animation
    sphere.position.x += 0.001; 
    sphere.position.y = Math.sin(Date.now() * 0.002) * 5;
    
    //cone animation
    cone.rotation.y += 0.0001;

    //cylinder animation
    Cyl.rotation.x += 0.0005;
    
    //cube animation
    cube.rotation.x += 0.0009;

    //torus animation
    torus.position.x += 0.0002;
    torus.position.y = Math.sin(Date.now() * 0.002) * 5;

  renderer.render( scene, camera );
}
renderer.setAnimationLoop(animate );

