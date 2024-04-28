import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/Addons.js";
//@ts-ignore
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
export const  load3d = (node:HTMLCanvasElement,modelPath:string,size:[number,number,number],y:number=0) => {
	const canvas = node as HTMLCanvasElement;
	const renderer = new THREE.WebGLRenderer({
		antialias: true,
		canvas,
		alpha: true,
	});
	THREE.ColorManagement.enabled = true;
	renderer.outputColorSpace = THREE.SRGBColorSpace;
	//@ts-ignore
	renderer.physicallyCorrectLights = true


	const fov = 75;
	const aspect = 1; // the canvas default
	const near = 0.1;
	const far = 100000;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 10;
	const controls = new OrbitControls(camera, canvas);
    controls.autoRotate = true
	controls.target.set(0, 0, 0);
	controls.update();
	const scene = new THREE.Scene();
	{
		const color = 0xFFFFFF;
		const intensity = 3;
		const light = new THREE.AmbientLight(color, intensity);
		scene.add(light);


	}
	{
		const skyColor = 0xB1E1FF; // light blue
		const groundColor = 0xB97A20; // brownish orange
		const intensity = 3;
		const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
		scene.add(light);

	}

	{
		const color = 0xFFFFFF;
		const intensity = 5;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(2, 5, 5);
		scene.add(light);
		scene.add(light.target);

	}
	{
		const light = new THREE.DirectionalLight(0xFFFFFF, 100);
		light.position.set(0, 0, 10);
		camera.add(light);
	}
	const pmremGenerator = new THREE.PMREMGenerator(renderer);
	scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
	{
		const gltfLoader = new GLTFLoader();
		gltfLoader.load(modelPath, (gltf) => {
			const root = gltf.scene;
			root.scale.set(size[0], size[1], size[2]);
			root.position.y = y;

			scene.add(root);
			controls.update();

		});


	}

	function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer): boolean {

		const canvas = renderer.domElement as HTMLCanvasElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;
		if (needResize) {

			renderer.setSize(width, height, false);

		}

		return needResize;

	}

	function render() {

		if (resizeRendererToDisplaySize(renderer)) {

			const canvas = renderer.domElement;
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();

		}

		controls.update();
		renderer.render(scene, camera);

		requestAnimationFrame(render);

	}

	requestAnimationFrame(render);

}
