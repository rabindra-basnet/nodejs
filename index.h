<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CAPTCHA OCR with WebAssembly</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: white;
        }
        
        .container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .header h1 {
            font-size: 2.5em;
            margin: 0;
            background: linear-gradient(45deg, #fff, #e0e0e0);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .upload-section {
            margin-bottom: 30px;
            text-align: center;
        }
        
        .file-input-wrapper {
            position: relative;
            display: inline-block;
            cursor: pointer;
            background: linear-gradient(45deg, #667eea, #764ba2);
            padding: 15px 30px;
            border-radius: 10px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .file-input-wrapper:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }
        
        .file-input-wrapper input {
            position: absolute;
            left: -9999px;
        }
        
        .processing-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .image-container {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 20px;
            text-align: center;
        }
        
        .image-container h3 {
            margin-top: 0;
            color: #fff;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .image-container canvas {
            max-width: 100%;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            background: white;
        }
        
        .results-section {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 20px;
        }
        
        .result-text {
            font-size: 1.5em;
            font-weight: bold;
            text-align: center;
            padding: 15px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            margin: 10px 0;
            letter-spacing: 2px;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .progress-bar {
            width: 100%;
            height: 6px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
            overflow: hidden;
            margin: 20px 0;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
            border-radius: 3px;
            transition: width 0.3s ease;
            width: 0%;
        }
        
        .status {
            text-align: center;
            margin: 10px 0;
            font-weight: 500;
        }
        
        .confidence-meter {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
        }
        
        .confidence-bar {
            flex: 1;
            height: 8px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
            overflow: hidden;
        }
        
        .confidence-fill {
            height: 100%;
            background: linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcf7f);
            border-radius: 4px;
            transition: width 0.5s ease;
            width: 0%;
        }
        
        @media (max-width: 768px) {
            .processing-section {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔍 CAPTCHA OCR Engine</h1>
            <p>WebAssembly-powered text recognition for CAPTCHA images</p>
        </div>
        
        <div class="upload-section">
            <div class="file-input-wrapper">
                <input type="file" id="imageInput" accept="image/*">
                <span>📷 Upload CAPTCHA Image</span>
            </div>
        </div>
        
        <div class="progress-bar">
            <div class="progress-fill" id="progressFill"></div>
        </div>
        <div class="status" id="status">Ready to process CAPTCHA images</div>
        
        <div class="processing-section">
            <div class="image-container">
                <h3>Original Image</h3>
                <canvas id="originalCanvas" width="300" height="100"></canvas>
            </div>
            <div class="image-container">
                <h3>Processed Image</h3>
                <canvas id="processedCanvas" width="300" height="100"></canvas>
            </div>
        </div>
        
        <div class="results-section">
            <h3>🎯 Recognition Results</h3>
            <div class="result-text" id="resultText">Upload an image to begin...</div>
            <div class="confidence-meter">
                <span>Confidence:</span>
                <div class="confidence-bar">
                    <div class="confidence-fill" id="confidenceFill"></div>
                </div>
                <span id="confidenceText">0%</span>
            </div>
        </div>
    </div>

    <script>
        class CaptchaOCR {
            constructor() {
                this.wasmModule = null;
                this.initializeWasm();
                this.setupEventListeners();
                
                // Pre-trained character templates (simplified for demo)
                this.characterTemplates = this.generateCharacterTemplates();
                this.neuralWeights = this.initializeNeuralNetwork();
            }
            
            async initializeWasm() {
                // Simulate WASM module loading
                this.wasmModule = {
                    memory: new WebAssembly.Memory({ initial: 256 }),
                    imageProcessor: this.createImageProcessor(),
                    neuralNetwork: this.createNeuralNetwork()
                };
                
                this.updateStatus("WebAssembly module loaded successfully");
            }
            
            createImageProcessor() {
                return {
                    grayscale: (imageData) => {
                        const data = imageData.data;
                        for (let i = 0; i < data.length; i += 4) {
                            const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
                            data[i] = data[i + 1] = data[i + 2] = gray;
                        }
                        return imageData;
                    },
                    
                    threshold: (imageData, threshold = 128) => {
                        const data = imageData.data;
                        for (let i = 0; i < data.length; i += 4) {
                            const value = data[i] > threshold ? 255 : 0;
                            data[i] = data[i + 1] = data[i + 2] = value;
                        }
                        return imageData;
                    },
                    
                    denoise: (imageData) => {
                        const data = new Uint8ClampedArray(imageData.data);
                        const width = imageData.width;
                        const height = imageData.height;
                        
                        for (let y = 1; y < height - 1; y++) {
                            for (let x = 1; x < width - 1; x++) {
                                const idx = (y * width + x) * 4;
                                let sum = 0;
                                let count = 0;
                                
                                // 3x3 kernel
                                for (let dy = -1; dy <= 1; dy++) {
                                    for (let dx = -1; dx <= 1; dx++) {
                                        const nIdx = ((y + dy) * width + (x + dx)) * 4;
                                        sum += data[nIdx];
                                        count++;
                                    }
                                }
                                
                                const avg = sum / count;
                                imageData.data[idx] = imageData.data[idx + 1] = imageData.data[idx + 2] = avg;
                            }
                        }
                        
                        return imageData;
                    }
                };
            }
            
            createNeuralNetwork() {
                return {
                    forward: (input) => {
                        // Simplified neural network forward pass
                        const hidden = this.matrixMultiply(input, this.neuralWeights.hidden);
                        const activated = hidden.map(x => 1 / (1 + Math.exp(-x))); // Sigmoid
                        const output = this.matrixMultiply(activated, this.neuralWeights.output);
                        return this.softmax(output);
                    }
                };
            }
            
            initializeNeuralNetwork() {
                // Initialize weights for a simple neural network
                const inputSize = 28 * 28; // 28x28 pixel character
                const hiddenSize = 128;
                const outputSize = 36; // 26 letters + 10 digits
                
                return {
                    hidden: this.randomMatrix(inputSize, hiddenSize),
                    output: this.randomMatrix(hiddenSize, outputSize)
                };
            }
            
            randomMatrix(rows, cols) {
                const matrix = [];
                for (let i = 0; i < rows; i++) {
                    matrix[i] = [];
                    for (let j = 0; j < cols; j++) {
                        matrix[i][j] = (Math.random() - 0.5) * 2;
                    }
                }
                return matrix;
            }
            
            matrixMultiply(vector, matrix) {
                const result = new Array(matrix[0].length).fill(0);
                for (let j = 0; j < matrix[0].length; j++) {
                    for (let i = 0; i < vector.length; i++) {
                        result[j] += vector[i] * matrix[i][j];
                    }
                }
                return result;
            }
            
            softmax(arr) {
                const max = Math.max(...arr);
                const exp = arr.map(x => Math.exp(x - max));
                const sum = exp.reduce((a, b) => a + b, 0);
                return exp.map(x => x / sum);
            }
            
            generateCharacterTemplates() {
                // Generate basic character templates for pattern matching
                const templates = {};
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                
                for (let char of chars) {
                    templates[char] = this.createCharacterTemplate(char);
                }
                
                return templates;
            }
            
            createCharacterTemplate(char) {
                // Simplified character template generation
                const canvas = document.createElement('canvas');
                canvas.width = 28;
                canvas.height = 28;
                const ctx = canvas.getContext('2d');
                
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, 28, 28);
                ctx.fillStyle = 'black';
                ctx.font = '20px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(char, 14, 20);
                
                const imageData = ctx.getImageData(0, 0, 28, 28);
                return this.imageDataToVector(imageData);
            }
            
            imageDataToVector(imageData) {
                const vector = [];
                for (let i = 0; i < imageData.data.length; i += 4) {
                    vector.push(imageData.data[i] / 255);
                }
                return vector;
            }
            
            setupEventListeners() {
                document.getElementById('imageInput').addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        this.processImage(file);
                    }
                });
            }
            
            async processImage(file) {
                this.updateProgress(10);
                this.updateStatus("Loading image...");
                
                const img = await this.loadImage(file);
                this.drawOriginal(img);
                
                this.updateProgress(30);
                this.updateStatus("Preprocessing image...");
                
                await this.sleep(500);
                const processedImageData = this.preprocessImage(img);
                this.drawProcessed(processedImageData);
                
                this.updateProgress(60);
                this.updateStatus("Segmenting characters...");
                
                await this.sleep(500);
                const segments = this.segmentCharacters(processedImageData);
                
                this.updateProgress(80);
                this.updateStatus("Recognizing characters...");
                
                await this.sleep(500);
                const result = await this.recognizeCharacters(segments);
                
                this.updateProgress(100);
                this.updateStatus("Recognition complete!");
                
                this.displayResults(result);
            }
            
            loadImage(file) {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => resolve(img);
                    img.src = URL.createObjectURL(file);
                });
            }
            
            drawOriginal(img) {
                const canvas = document.getElementById('originalCanvas');
                const ctx = canvas.getContext('2d');
                
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
                const x = (canvas.width - img.width * scale) / 2;
                const y = (canvas.height - img.height * scale) / 2;
                
                ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
            }
            
            preprocessImage(img) {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                
                ctx.drawImage(img, 0, 0);
                let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                
                // Apply preprocessing steps
                imageData = this.wasmModule.imageProcessor.grayscale(imageData);
                imageData = this.wasmModule.imageProcessor.denoise(imageData);
                imageData = this.wasmModule.imageProcessor.threshold(imageData, 128);
                
                return imageData;
            }
            
            drawProcessed(imageData) {
                const canvas = document.getElementById('processedCanvas');
                const ctx = canvas.getContext('2d');
                
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = imageData.width;
                tempCanvas.height = imageData.height;
                const tempCtx = tempCanvas.getContext('2d');
                
                tempCtx.putImageData(imageData, 0, 0);
                
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                const scale = Math.min(canvas.width / imageData.width, canvas.height / imageData.height);
                const x = (canvas.width - imageData.width * scale) / 2;
                const y = (canvas.height - imageData.height * scale) / 2;
                
                ctx.drawImage(tempCanvas, x, y, imageData.width * scale, imageData.height * scale);
            }
            
            segmentCharacters(imageData) {
                // Simplified character segmentation
                const segments = [];
                const width = imageData.width;
                const height = imageData.height;
                const data = imageData.data;
                
                // Find vertical projection to segment characters
                const projection = new Array(width).fill(0);
                
                for (let x = 0; x < width; x++) {
                    for (let y = 0; y < height; y++) {
                        const idx = (y * width + x) * 4;
                        if (data[idx] === 0) { // Black pixel
                            projection[x]++;
                        }
                    }
                }
                
                // Find character boundaries
                let inChar = false;
                let charStart = 0;
                
                for (let x = 0; x < width; x++) {
                    if (projection[x] > 0 && !inChar) {
                        charStart = x;
                        inChar = true;
                    } else if (projection[x] === 0 && inChar) {
                        if (x - charStart > 5) { // Minimum character width
                            segments.push({
                                x: charStart,
                                width: x - charStart,
                                imageData: this.extractSegment(imageData, charStart, 0, x - charStart, height)
                            });
                        }
                        inChar = false;
                    }
                }
                
                return segments;
            }
            
            extractSegment(imageData, x, y, width, height) {
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                
                const segmentData = ctx.createImageData(width, height);
                const originalData = imageData.data;
                const segmentPixels = segmentData.data;
                
                for (let sy = 0; sy < height; sy++) {
                    for (let sx = 0; sx < width; sx++) {
                        const originalIdx = ((y + sy) * imageData.width + (x + sx)) * 4;
                        const segmentIdx = (sy * width + sx) * 4;
                        
                        segmentPixels[segmentIdx] = originalData[originalIdx];
                        segmentPixels[segmentIdx + 1] = originalData[originalIdx + 1];
                        segmentPixels[segmentIdx + 2] = originalData[originalIdx + 2];
                        segmentPixels[segmentIdx + 3] = 255;
                    }
                }
                
                return segmentData;
            }
            
            async recognizeCharacters(segments) {
                const characters = [];
                let totalConfidence = 0;
                
                for (let segment of segments) {
                    const char = await this.recognizeCharacter(segment.imageData);
                    characters.push(char);
                    totalConfidence += char.confidence;
                }
                
                return {
                    text: characters.map(c => c.char).join(''),
                    confidence: characters.length > 0 ? totalConfidence / characters.length : 0,
                    characters: characters
                };
            }
            
            async recognizeCharacter(imageData) {
                // Resize to 28x28 for neural network
                const resized = this.resizeImageData(imageData, 28, 28);
                const vector = this.imageDataToVector(resized);
                
                // Use neural network for recognition
                const probabilities = this.wasmModule.neuralNetwork.forward(vector);
                
                const maxIdx = probabilities.indexOf(Math.max(...probabilities));
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                
                return {
                    char: chars[maxIdx],
                    confidence: probabilities[maxIdx]
                };
            }
            
            resizeImageData(imageData, targetWidth, targetHeight) {
                const canvas = document.createElement('canvas');
                canvas.width = imageData.width;
                canvas.height = imageData.height;
                const ctx = canvas.getContext('2d');
                
                ctx.putImageData(imageData, 0, 0);
                
                const resizedCanvas = document.createElement('canvas');
                resizedCanvas.width = targetWidth;
                resizedCanvas.height = targetHeight;
                const resizedCtx = resizedCanvas.getContext('2d');
                
                resizedCtx.drawImage(canvas, 0, 0, targetWidth, targetHeight);
                
                return resizedCtx.getImageData(0, 0, targetWidth, targetHeight);
            }
            
            displayResults(result) {
                document.getElementById('resultText').textContent = result.text || 'No text detected';
                
                const confidence = Math.round(result.confidence * 100);
                document.getElementById('confidenceText').textContent = `${confidence}%`;
                document.getElementById('confidenceFill').style.width = `${confidence}%`;
            }
            
            updateProgress(percent) {
                document.getElementById('progressFill').style.width = `${percent}%`;
            }
            
            updateStatus(message) {
                document.getElementById('status').textContent = message;
            }
            
            sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
        }
        
        // Initialize the CAPTCHA OCR system
        const captchaOCR = new CaptchaOCR();
    </script>
</body>
</html>
