import React from 'react';
import 'react-bootstrap'
import { useState } from 'react';
import { Document, Page ,pdfjs} from 'react-pdf';
import { Button, Container, Nav } from 'react-bootstrap';
import  {Link} from 'react-scroll';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const About =() =>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    return(
        <div id="PS" >
           <Container>  
            <h3>Problem Statement</h3>
            <div>
                <p>Autonomous vehicles need to continuously assess the risk of collisions by detecting and tracking multiple objects
                (cars, pedestrians, cyclists) and predicting their future trajectories. A system that uses deep learning to track 
                these objects in real time, combined with trajectory and velocity analysis, can provide an early warning for 
                potential collisions, helping improve safety.
                </p>
            </div>
           
            </Container> 
        </div>
    );
}

export default About;