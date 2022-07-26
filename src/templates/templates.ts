/**
________                       ______      _____             
___  __/___________ ______________  /_____ __  /_____________
__  /  _  _ \_  __ `__ \__  __ \_  /_  __ `/  __/  _ \_  ___/
_  /   /  __/  / / / / /_  /_/ /  / / /_/ // /_ /  __/(__  ) 
/_/    \___//_/ /_/ /_/_  .___//_/  \__,_/ \__/ \___//____/  
                       /_/
*/
export default Object.freeze({
  indexHTML: Object.freeze(
    `
      <div class="modal-header">
      <h1 class="logo">
        <img src="./assets/images/logo-inverted128.png" alt="Social Media Blocks" class="logo-icon" />
        Social Media Blocks
        <img src="./assets/images/logo-inverted128.png" alt="Social Media Blocks" class="logo-icon" />
      </h1>
      <!-- top-right -->
      <button id="settingsToggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <rect fill="none" height="24" width="24"/>
          <path
            d="M19.5,12c0-0.23-0.01-0.45-0.03-0.68l1.86-1.41c0.4-0.3,0.51-0.86,0.26-1.3l-1.87-3.23c-0.25-0.44-0.79-0.62-1.25-0.42 l-2.15,0.91c-0.37-0.26-0.76-0.49-1.17-0.68l-0.29-2.31C14.8,2.38,14.37,2,13.87,2h-3.73C9.63,2,9.2,2.38,9.14,2.88L8.85,5.19 c-0.41,0.19-0.8,0.42-1.17,0.68L5.53,4.96c-0.46-0.2-1-0.02-1.25,0.42L2.41,8.62c-0.25,0.44-0.14,0.99,0.26,1.3l1.86,1.41 C4.51,11.55,4.5,11.77,4.5,12s0.01,0.45,0.03,0.68l-1.86,1.41c-0.4,0.3-0.51,0.86-0.26,1.3l1.87,3.23c0.25,0.44,0.79,0.62,1.25,0.42 l2.15-0.91c0.37,0.26,0.76,0.49,1.17,0.68l0.29,2.31C9.2,21.62,9.63,22,10.13,22h3.73c0.5,0,0.93-0.38,0.99-0.88l0.29-2.31 c0.41-0.19,0.8-0.42,1.17-0.68l2.15,0.91c0.46,0.2,1,0.02,1.25-0.42l1.87-3.23c0.25-0.44,0.14-0.99-0.26-1.3l-1.86-1.41 C19.49,12.45,19.5,12.23,19.5,12z M12.04,15.5c-1.93,0-3.5-1.57-3.5-3.5s1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5S13.97,15.5,12.04,15.5z"
          />
        </svg>
      </button>
      </div>
      <div class="modal-content">
      <p>Early Access To Social Media Block!</p>
      </div>
      <div class="modal-icons">
      <div class="container">
        <h3>How to access:</h3>
        <ul>
          <li>
            Clone this repo on <span><a href="https://github.com/JavascriptDon/Social-Media-Blocks-Extension" target="_blank">github</a></span
            >.
          </li>
          <li> Go in to Google Chrome Extensions and turn Developer Mode on.</li>
          <li> Click on "Load Unpacked."</li>
          <li>Select folder which contains content of this repos.</li>
          <li>Click the switch button to turn extension on and it should work.</li>
        </ul>
      </div>
      </div>
      <div id="modal-footer">
      <a href="https://github.com/JavascriptDon/Social-Media-Blocks-Extension" target="_blank"><p id="extension-acknowledgements">MIT © HR & Community</p></a>
      
      <!-- extension version number: -->
      <div id="extension">
        <a id="extension-update"></a>
        <span id="extension-version"></span>
      </div>
      </div>

      <!-- settings dialog box -->
      <fieldset id="settingsDialog">
        <legend id="settingsLegend" title="Settings">
          Settings
        </legend>
        <h3 id="social-media-blocker-settings-header">Setting options coming soon!</h3>
        <div id="settings-animation"></div>
      </fieldset>
`
  ),
});