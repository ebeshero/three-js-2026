import * as THREE from "three";

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
const geometry = new THREE.BoxGeometry(10, 10, 10);

// Textures
const libraryTexture = new THREE.TextureLoader().load("images/library.jpg");
const wowTexture = new THREE.TextureLoader().load(
  "images/warofworldswordcloud.png",
);
const msTexture = new THREE.TextureLoader().load("images/msImage.png");
const smaugTexture = new THREE.TextureLoader().load(
  "images/tolkien-smaug-artwork-2.jpg",
);

//set the color of the basic material in the object parameters `{}`

// const material = new THREE.MeshBasicMaterial( { color: 0xFF6347 } );
const material = new THREE.MeshStandardMaterial({
  color: 0x6347ff,
  map: smaugTexture,
});

const cube = new THREE.Mesh(geometry, material);
cube.position.z = -15;
cube.position.x = -15;
cube.rotation.x = 2;
cube.rotation.y = 0.5;

const ico = new THREE.IcosahedronGeometry(15, 1);
const icoMaterial = new THREE.MeshPhongMaterial({
  color: 0x33aadd,
  map: msTexture,
  shininess: 75,
});

const icoMesh = new THREE.Mesh(ico, icoMaterial);
// object.position.set ( x, y, z );
icoMesh.position.set(30, 10, -20);

const sphereGeo = new THREE.SphereGeometry(20, 32, 16);
const sphereMaterial = new THREE.MeshBasicMaterial({ map: wowTexture });
const sphere = new THREE.Mesh(sphereGeo, sphereMaterial);
// object.position.set ( x, y, z );
sphere.position.set(-30, 5, -45);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(-1, -10, -10);

const pointLight2 = new THREE.PointLight(0xffffff);
pointLight2.position.set(50, 30, -20);

const pointLight3 = new THREE.PointLight(0xffffff);
pointLight3.position.set(200, -100, 50);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(25, -15, -400);

scene.add(pointLight);
scene.add(pointLight2);
scene.add(pointLight3);
scene.background = libraryTexture;
scene.add(cube);
scene.add(ambientLight);
scene.add(icoMesh);
scene.add(sphere);

//Render the scene:
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);
camera.position.setY(10);
renderer.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);
  // slowly rotate the cube:
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  // rotate the icosahedron a little faster in the opposite direction:
  icoMesh.rotation.x += -0.001;
  icoMesh.rotation.z += -0.001;
  sphere.rotation.x += -0.001;
  sphere.rotation.z += -0.001;

  renderer.render(scene, camera);
}

animate();
