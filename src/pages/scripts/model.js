import React from 'react';
import 'react-bootstrap'
import { useState } from 'react';
import { Document, Page ,pdfjs} from 'react-pdf';
import { Button, Container, Nav } from 'react-bootstrap';
import unet from './U-NET.jpg';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Model =() =>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    return(
        <div id="model">
           <Container>  
           <h3>Approach</h3>
            <div >
            <p>For an accurate prediction through time, our aim was to create a model that could predict (n+m)th frame when given the nth frame.
            Accordingly, we proceeded to use a 3D convolutional neural network where the 3rd dimension would be the stack of nth to (m-1)th frame. </p>
           <p> We modified the architecture of classic U-Net for the purpose. We implemented attention gates to the model architecture to prioritize
           the most relevant features and weighting important regions, which in our case were moving vehicles. </p>
           <p>Another change we make to typical Unet was to increase the number of features extracted and the layers.
           While there were many challenges in the process, one that stood out was properly training on hyperparameters for optimal learning.
           </p>
           <p>
           For overcoming this issue, we relied on 3 different loss functions:
L1 loss helped us to not let outliers(which are a common problem in visual models) have much effect on the training.
Perceptual loss ensures that the reconstructed image maintained the semantics and textures.
Gradient Difference Loss focuses on gradient differences between the prediction and the target. A lot of high definition details
were preserved in the model due to the combination of these losses.
           </p>
           <p>
           For efficient learning, our learning rate and the perceptual loss were dynamically changing, through the use of schedulers for learning rates.
           </p>
            <img src={unet} alt="U-NET++" height={650} width={1200}/>
            <p>2.Trajectory projection and prediction:
            While several approaches are in use currently that make use of AI models to find the  trajectory of detected objects and 
            prediction, we intend to go with a more deterministic approach. By our plan, location data of detected objects in
            multiple frames will be extracted and according to their displacements in different frames(different times) their 
            velocity vectors could be extrapolated. A risk analysis feature could be derived from these vectors. We want to
            calculate predictions for 3 temporal stages - 1, 3, 5 seconds in the future where an impending collision in 1 sec 
            returns the highest level of alert.</p>
            </div>
            </Container> 
        </div>
    );
}

export default Model;