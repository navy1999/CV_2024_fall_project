import React from 'react';
import 'react-bootstrap'
import { useState } from 'react';
import { Document, Page ,pdfjs} from 'react-pdf';
import { Button, Container, Nav } from 'react-bootstrap';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Model =() =>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    return(
        <div id="model">
           <Container>  
           <h3>Approach</h3>
            <div >
            <p>The project intends to determine and classify mobile units in vision, and have a prediction on their possible 
            futures projected from their mobility parameters.
            We intend to break this into two: </p>
           <p> 1. Classifying objects in real time video feeds.
            Popular frameworks used for this purpose uses yolo and R-CNNs. While these are not exactly weak,
            we aim to build a framework that could be done causing lesser computational costs. For that purpose, we propose
            to use autoencoder network for segmenting visual data, which can help with reducing dimentional complexities and 
            hence reducing computational loads. </p>

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