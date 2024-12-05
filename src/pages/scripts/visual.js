import React from 'react';
import 'react-bootstrap'
import { useState } from 'react';
import { Document, Page ,pdfjs} from 'react-pdf';
import { Button, Container, Nav } from 'react-bootstrap';
import unet from './U-NET.jpg';
import iou from './IOU.jpeg';
import Loss from './Loss.jpeg';
import metrics from './Metrics_Comparison.jpeg'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Visual =() =>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    return(
        <div id="visual">
           <Container>  
           <h3>Figures , Metrics and Tables</h3>
            <div >
           
            <img src={iou} alt="IOU" height={650} width={1200}/>
            <img src={Loss} alt="Loss Plot" height={650} width={1200}/>
            <img src={metrics} alt="Comparison of Metrics" height={650} width={1200}/>
            <p>Hello</p>
            </div>
            </Container> 
        </div>
    );
}

export default Visual;