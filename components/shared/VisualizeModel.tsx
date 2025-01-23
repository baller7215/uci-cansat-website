import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const VisualizeModel = () => {
    useEffect(() => {
        // Set up scene, camera, and renderer
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xeeeeee); // Light gray
        const camera = new THREE.PerspectiveCamera(75, 690 / 630, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(690, 630);
        renderer.setPixelRatio(window.devicePixelRatio);

        // Append renderer to the DOM
        const container = document.getElementById('threejs-container');
        container.appendChild(renderer.domElement);

        // Lighting
        // const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1); // Corrected from HemisphericLight
        // light.position.set(0, 20, 10);
        // scene.add(light);
        const light = new THREE.HemisphereLight(0xffffff, 0x000000, 1); // Stronger intensity
        light.position.set(0, 50, 50);
        scene.add(light);


        // Load the GLTF model
        const loader = new GLTFLoader();
        // loader.load(
        //     // public/assets/models/top_level.gltf
        //     '/assets/models/top_level.gltf',
        //     (gltf) => {
        //         console.log('Model loaded:', gltf);
        //         const model = gltf.scene;
        //         model.scale.set(0.5, 0.5, 0.5);
        //         scene.add(model);
        
        //         // Automatically adjust camera to fit the model
        //         const box = new THREE.Box3().setFromObject(model);
        //         const size = box.getSize(new THREE.Vector3());
        //         const center = box.getCenter(new THREE.Vector3());
        //         camera.position.set(center.x, center.y, size.z * 2);
        //         camera.lookAt(center);
        //     },
        //     undefined,
        //     (error) => console.error('Error loading model:', error)
        // );

        // Animation loop
        
        loader.load(
            '/assets/models/top_level.gltf',
            (gltf) => {
                console.log('Model successfully loaded:', gltf);
                const model = gltf.scene;
                model.scale.set(0.5, 0.5, 0.5);
                scene.add(model);
            },
            (xhr) => {
                console.log(`Model loading progress: ${(xhr.loaded / xhr.total) * 100}%`);
            },
            (error) => {
                console.error('Error loading the model:', error);
            }
        );
        
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            if (container) container.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div id="threejs-container" className="w-[690px] h-[630px] m-auto"></div>
    );
};

export default VisualizeModel;
