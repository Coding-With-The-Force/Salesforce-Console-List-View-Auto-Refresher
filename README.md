# Salesforce Console List View Auto Refresher

<div style="text-align:center;">
  <a href="https://githubsfdeploy.herokuapp.com?owner=Coding-With-The-Force&repo=Salesforce-Console-List-View-Auto-Refresher&ref=main" target="_blank">
    <img alt="Deploy to Salesforce"
         src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
  </a>  
</div>

<br/>

This repo houses the code for a custom Salesforce console list view refresher so that people monitoring list views for inbound cases or other objects will get a refreshed list view automatically instead of needing to press the refresh button on the list view manually. If you wanna try it out just click the "Deploy to Salesforce" button above!   

Also, just in case anyone is wondering why this is an Aura component instead of an LWC. This is currently still the simplest cleanest way to get this functionality to work. None of the functionality available with LWC's can do this as consistently or as clean, even with the support for console apps that was added relatively recently. I have tried many LWC alternatives, and none to date work as flawlessly that I have found.

---

### How to setup the console list view refresher

Setting up the list view refresher is extremely simple. Just traverse to your lightning console app of choice (Setup -> App Manager -> Select App to Update), then add the ListViewRefresherAura component as a utility bar item with the same settings outlined in the image below:   

<br/>

![console list view refresher setup](https://github.com/Coding-With-The-Force/Salesforce-Console-List-View-Auto-Refresher/blob/main/setup-images/ListViewRefresherAppSetup.png?raw=true) 


---

### How to use the console list view refrehser   

By default the console list view refresher automatically will refresh you actively viewed list view once every minute. However you can change that to be a longer or shorter time period by simply changing the value in the list view refresher settings and then clicking the "Change Refresh Rate" button (as shown below).   

You can also turn off the list view refresher whenever you want by clicking the "Stop List View Refresh" button. If the list view refresher is turned off, the "Stop List View Refresh" button will be replaced with a "Start List View Refresh" button to allow you to turn it back on whenever you'd like.     

<br/>

![view of console list view refresher](https://github.com/Coding-With-The-Force/Salesforce-Console-List-View-Auto-Refresher/blob/main/demo-gifs/ListViewRefresherDemo.gif)



