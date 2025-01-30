import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const VisualizeModel = ({ modelPath } : { modelPath : string }) => {
    useEffect(() => {
        // set up scene, camera, and renderer
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xeeeeee); // light gray background to see canvas more clearly

        const camera = new THREE.PerspectiveCamera(75, 690 / 630, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(690, 630);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0xeeeeee, 1);

        const container = document.getElementById('threejs-container');
        if (container) {
            container.appendChild(renderer.domElement);
        } else {
            console.error('Container element not found');
        }

        // lighting
        const light = new THREE.DirectionalLight(0xffffff, 2);
        light.position.set(5, 5, 5);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.screenSpacePanning = false;
        controls.minDistance = 1;
        controls.maxDistance = 100;
        controls.update();

        // load the GLTF model with DRACO
        const loader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        loader.setDRACOLoader(dracoLoader);

        loader.load(
            // '/assets/models/top_level.gltf',
            modelPath,
            (gltf) => {
                console.log('Model successfully loaded:', gltf);
                const model = gltf.scene;
                
                // compute bounding box and center the model
                const box = new THREE.Box3().setFromObject(model);
                const size = box.getSize(new THREE.Vector3());
                const center = box.getCenter(new THREE.Vector3());

                console.log('Model Bounding Box:', size);
                console.log('Model Center:', center);

                model.position.sub(center);
                
                model.scale.set(1.5, 1.5, 1.5);

                scene.add(model);

                // adjust camera position
                const distance = Math.max(size.x, size.y + 0.25, size.z);
                camera.position.set(center.x, center.y, distance);
                camera.lookAt(center);

                controls.target.set(center.x, center.y - 0.1, center.z);
                controls.update();
            },
            undefined,
            (error) => console.error('Error loading model:', error)
        );

        // animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // cleanup
        return () => {
            if (container) container.removeChild(renderer.domElement);
        };
    }, []);

    return <div id="threejs-container" className="w-full md:w-[690px] h-full md:h-[630px] m-auto"></div>;
};

export default VisualizeModel;
