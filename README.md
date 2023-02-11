# react-html5-bg-video
![Version](https://img.shields.io/github/v/release/sricharankrishnan/react-html5-bg-video?sort=semver)
![Open Issues](https://img.shields.io/github/issues-raw/sricharankrishnan/react-html5-bg-video)
![Closed Issues](https://img.shields.io/github/issues-closed-raw/sricharankrishnan/react-html5-bg-video)
![License](https://img.shields.io/github/license/sricharankrishnan/react-click-image-play-youtube-video)
![Maintenance](https://img.shields.io/maintenance/yes/2023)
[![Netlify Status](https://api.netlify.com/api/v1/badges/aefcee26-341c-4336-96d7-2f7f621bc95b/deploy-status)](https://app.netlify.com/sites/lamborghini-safari-react/deploys)
![Component Preview](https://github.com/sricharankrishnan/react-html5-bg-video/blob/master/component-preview.gif)

### About
A reactjs component designed to help display background HTML5 videos on your webpages with local component level state management for updates. The component was built on a sample create-react-app project template from which the re-useable portion was extracted as a seperate project. This is a functional component that relies on functional component hooks and thus, may not be suitabe for older react porjects.

Visit my sample portfolio website that uses this component at [The Lamborghini Safari](https://lamborghini-safari-react.netlify.app/). This should give you an idea of what to expect.

### Built Using
- React JS
- Functional Component
- Functional Component Hooks
- CSS/Sass Stylesheets

### Prerequisites
Any react project that uses functional based hooks can utitlize this particular component. Additionally, this component has a dependency on an NPM package to check for browser environment type. Other than Internet Explorer, this component should work well with most mordern browsers. However, its performance in Microsoft Edge is not known at the moment.

### Usage
- Install npm package *'react-device-detect'* that is available at [this particular npm url](https://www.npmjs.com/package/react-device-detect)
```console
foo@bar:~$ npm install react-device-detect
```

- Download a copy of this repository into your local machine. Ideally you could take a zip file and extract it. Place the folder into a appropriate location in your react application. Once done, import it as needed like the sample shown below:
```javascript
import {ReactHTML5BackgroundVideo} from "./some/location/to/react-html5-bg-video/index.js";
```

- You'll need two versions of a video that should be sent as props to this react component. These will need to be an MP4 Version and WEBM Version. Once your have the source available, create a props object and have that sent over to this component:
```javascript
import {ReactHTML5BackgroundVideo} from "./some/location/to/react-html5-bg-video/index.js";

export const YourSampleComponent = () => {
  const videoProps = {
    mp4: "https://example/source/to/video.mp4",
    webm: "https://example/source/to/video.webm"
  };
  
  return (
    <React.Fragment>
      <div className="parentElement positionRelative">
        <ReactHTML5BackgroundVideo {...videoProps}/>
      </div>
    </React.Fragment>
  );
};
```

- <b>Important:</b> As shown in the example code, please ensure that any parent element that encapsulates the HTML5 background component, must atleast have its position placed as relative with some specified height. Otherwise, you might not be able to see your desired results on your webpage. This should work in div elements that are being used to create a Jumbotron or even smaller sections on your webpage.

- With this, you should be able to see the component loading, if the browser that your working with supports the conditions laid down by the commponent. This component is responsive, so no additional code is required to handle styling unless you choose to overwrite.

### Raising Issues and Project Contributions
As a part of continuous improvements and maintenance, I am happy to hear from any of you if you have faced issues using this component. Also, if you have any ideas that can help improve this component, I'd love would to hear that as well. There is also an alternative jQuery version of this project in my github repo list as well for those of you who are working with jQuery and other legacy code. Please feel free to raise a project issue or pull requests from your side.

### Support This Project
If you like this project, I would really appreciate you placing a star on the github project. This would really help encourage me to become a better developer. Speak to your friends and colleagues about this project too if you can and seek their support. Here is wishing you a nice day and happy coding. Cheers!
