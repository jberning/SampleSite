/*
Given a data set of urls to download images, 
download all images in the set without exceeding 3 images being downloaded at a time. 
The url only allows 1 image download. 

Another wording:You have a service that can only handle three simultaneous connections, 
how would you implement async promises to ensure that doing n # of requests doesn't exceed the connection limit of 3
*/

soluction =(ar) =>{
    const userAction = async (url) => {
    const response = await fetch(url);
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
  }
    ar.forEach(element => {
        userAction(element);
    });
    async function getProcessedData(url) {
        let v;
        try {
          v = await downloadData(url);
        } catch (e) {
          v = await downloadFallbackData(url);
        }
        return processDataInWorker(v);
      }
} 

