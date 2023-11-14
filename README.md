# Gamified-Canvas-ACan


**An Interactive GAMIFIED version of the UI/UX for Canvas LMS by Instructure**
<img width="942" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/a56473df-12b9-42a0-ac81-1063c9e85204">

**Description**
<br>
A Javascript React application for a Gamified Interface of Canvas LMS. The idea is to motivate the students by helping them engage in classes with achievement Medals. Developing a Rewards Center for redeeming and earning ACan points

**Video Presentation**
https://youtu.be/8Fe_6UhcPd0

**CHECK IT OUT**
[https://apple-i-table-saumick-pradhan.vercel.app/](https://apple-i-table-saumick-pradhan.vercel.app/)


**Gathering design requirements**

**a. Needs Finding:**
<details>
<summary> <b>Interviews:</b> </summary>

**i.	Resident Advisor Job manager**

**1. How do you currently use your desk at work or home?**

**Answer:** I use my desk for both work and personal tasks. It's mainly a workspace where I spend a significant portion of my day.

**2.	What challenges or discomforts do you face while working at your desk?**

**Answer:** I often experience discomfort in my back and neck due to sitting for long hours. Also, adjusting the desk height manually is a hassle.

**3.	What features would you expect from a Smart Desk to improve your productivity and well-being?**

**Answer:** I would like the Smart Desk to automatically adjust its height to encourage better posture. It should also have integrated wireless charging and cable management for a clutter-free workspace.

**4.	How do you envision the Smart Desk fitting into your daily routine?**

**Answer:** Ideally, it should sync with my calendar and adjust the desk height for different tasks automatically. It should also provide reminders for posture and breaks.

**5.	What role do you think the user interface should play in controlling the Smart Desk?**

**Answer:** The user interface should be intuitive and easy to use, with both a mobile app and voice control. It should allow me to customize desk settings based on my preferences.


**ii.	CS Student friend**

**1.	Can you describe your typical workday and how you use your desk in your profession?**

**Answer:** My workday varies, but I spend a lot of time designing on my computer. Sometimes I sit, sometimes I stand while working on creative projects.

**2.	Are there any specific health concerns or ergonomic needs you have while working at your desk?**

**Answer:** Maintaining good posture is crucial, but it's easy to forget when I'm engrossed in my work. Also, I often switch between sitting and standing.

**3.	How would a Smart Desk potentially enhance your creative work and productivity?**

**Answer:** A Smart Desk could help me switch between sitting and standing more easily and remind me to change my posture. It should also integrate with my design software for quick shortcuts.

**4.	What types of customization or personalization options would you like to see in the Smart Desk's interface?**

**Answer:** Customization is essential. I'd like to set different height presets for different tasks and have the option to sync it with my calendar.

**5.	Do you prefer a mobile app or physical controls for managing the Smart Desk?**

**Answer:** I prefer a mobile app for convenience, but physical controls should also be available for quick adjustments.


**iii. Work from Home uncle**

**1.	How do you use your desk in your home-based business, and how does it affect your daily routine?**

**Answer:** My desk is the center of my business operations. I manage everything from there, including calls, paperwork, and meetings.

**2.	What challenges do you face related to workspace organization, productivity, or health?**

**Answer:** I struggle with maintaining an organized workspace and keeping track of time. I also worry about sitting for extended periods.

**3.	 How do you envision a Smart Desk contributing to your work efficiency and well-being?**

**Answer:** A Smart Desk should help me organize my workspace with built-in storage solutions. It should adjust its height automatically and integrate with my calendar.

**4.	What data or analytics would you like the Smart Desk to provide, and how should the interface present this information?**

**Answer:** A Smart Desk should help me organize my workspace with built-in storage solutions. It should adjust its height automatically and integrate with my calendar.

**5.	Do you have any concerns about privacy or security regarding the Smart Desk's data collection?**

**Answer:** I'm concerned about data privacy, so the Smart Desk should have robust security features. I should have control over what data is collected and how it's used.
![image](https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/1c776b6d-5986-480b-80ed-b87fb52e06d1)

</details>

<details> 
  <summary><b>My Learnings and Report</b></summary>

**From these interviews, my learnings from them are:**

**i)	Ergonomics and Health Considerations:** Users, in both professional and personal settings, are concerned about maintaining good posture and avoiding discomfort caused by prolonged sitting. The Smart Table should have the ability to automatically adjust its height to promote better posture and reduce strain on the back and neck. Reminders for posture and breaks are desired to encourage healthy habits.

**ii)	Customization and Flexibility:** Users have different work routines and preferences, so customization is essential. The Smart Table should allow users to set different height presets for various tasks. Integration with a user's calendar to adjust the table's settings based on scheduled events is desirable.

**iii)	Workspace Organization:** Many users expressed the need for a clutter-free workspace.

**iv)	Productivity Enhancement:** Users want the Smart Table to enhance their productivity. Features like quick shortcuts for specific tasks and integration with relevant software applications are important for professionals and students.

**v)	Privacy and Security:** If the table is going to be patronizable, it should have strong authentication features for every user profile.

</details>


**b.	Assumptions**

We assume that a Smart Desk is equipped with sensors and features that allow it to adjust its height, is connected to power, and have integrated connectivity with other smart devices. Additionally, we may want to assume that the table is sturdy and there is enough room for it. We also have all the components for a display for the UI and the moving parts (if any). It is also connected to the Internet. We operate in an ideal scenario.

<details>
<summary><b>c.	Design Requirements for the Smart Desk User Interface: “User wants to have….</b></summary>

•	Easy Automatic height adjustment, posture preferences with Quick motions.

•	Interactive touch screen.

•	Good cable management.

•	User profiles.

•	Easy Smart devices connectivity.

•	Charging dock management for devices.

•	Notifications for messages, emails.

•	Smart phone pairing with a familiar interface like Apple Car play and Android Auto.

•	Charging capability

•	On device music connectivity

•	Daily utility notifications like calendar, weather, time, date for accessibility

•	Productivity tips: Calendar, Timer, to do list, Pomodoro, Do not disturb mode

•	Large desk with enough space for their screen(s) as well as writing and keyboard space

•	Light and other electronic connection

•	Authentication for profile and security/ privacy

<b>Future Work:</b>

•	Create an integration with an external monitor

•	Have external connections to manage the lighting near the table

•	Voice assistant integration

•	User data analytics and feedback

</details>


<details>
<summary><b>Sketching Design Alternatives</b></summary>

**Design Challenges:**

**1)	How to make the user comfortable at the table and have adaptable posture?**

[My Approach: Adjust the table height and posture of the table according to the preference of each user.]

**2)	How to make the user be connected to their smart devices (like phone, watch, earbuds etc.) to the table to collect data and charge them?**

[My Approach: Add smart devices connectivity on the table to sync information and charge on the table, maybe use the OS on these devices to sync them]

**3)	How to reduce user’s distractions while working at the table in order to be more productive?**

[My Approach: Implement a suite of productivity Apps like Timer, calendar, pomodoro, standup, etc. in the UI, maybe sync from phone]

</details>


<details>
<summary><b>10-PLUS-10 for Each Design Chanllenge</b></summary>
  
<details><summary><b>1)	How to make the user comfortable at the table and have adaptable posture?</b></summary>

<img width="477" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/6f86d70a-1668-4c3d-8b85-aed45c7e1242">

<img width="553" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/254d697a-309d-407d-9a6a-2d43d131e87d">

<img width="553" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/6734a385-327c-45f1-9bba-ffc44b412163">

<img width="550" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/0c1eb7a1-41d2-4356-a0db-6041966675c4">

<img width="554" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/968e41be-c6db-486b-aad7-b66454289624">

</details>


<details>
<summary><b>2)	How to make the user be connected to their smart devices (like phone, watch, earbuds etc.) to the table to collect data and charge them?</b></summary>
  
<img width="467" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/0de03ad4-ddb0-4b43-80e9-1c3da925750d">

<img width="568" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/b626a9e1-5284-4cb2-b27f-77a93ae2e187">

<img width="542" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/a77137e9-200d-460a-8ee7-3689a62987fe">

<img width="589" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/70f83955-70a0-475f-8219-836034389070">

<img width="502" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/ce7952ab-e3a7-463f-89b7-c1ee5afdf568">

</details>

<details>
<summary><b> 3) How to reduce user’s distractions while working at the table in order to be more productive?</b></summary>
  
<img width="453" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/a6385816-e935-41b1-b23e-fa7de841b7c6">

<img width="549" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/836e3a07-3e2e-48e6-947c-724ef8032cd7">

<img width="532" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/cc3ff60e-be1c-4df0-9d08-8ebebaf336cb">

<img width="555" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/d22c13ec-ac1a-4a35-8ac0-483d588582d4">

<img width="551" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/4b04d2fb-d975-473f-ab7f-990e31361ec9">
</details>

</details>



<details>
  
<summary><b>Survey</b></summary>

•	Voice assistant integration

•	User data analytics and feedback
  
</details>


<details>
  
<summary><b>Contextual inquiry findings</b></summary>

•	Voice assistant integration

•	User data analytics and feedback
  
</details>



**BASIC UI**

<details>
<summary><b>a)	Preliminary Controls and Usage </b></summary>

<details>
<summary><b>Controls: “Ability to…”</b></summary>
  
•	Set Timer, standup time

•	Adjust the table height 

•	Adjust notification preference

•	Select user profile

•	Write and see notes/ to dos

•	Power on/ off the display

•	Charge the devices and connect data from them

•	Select and play music

•	Customize the calendar

•	Authenticate the user profile with mobile device
</details>


<details>
<summary><b>Display: “Display the…”</b></summary>
  
•	Time, weather, day, user name

•	Devices connected and charging, the battery percentage

•	User preferred notifications, height

•	Productivity apps

•	Different messaging apps

•	Notes

•	Stand up notifications

•	Pomodoro timer

•	Music playing

</details>


<details>
<summary><b>Design choice:</b></summary>
  
•	Users should be able to authenticate themselves and select the profiles

•	Select the height of the table

•	Turn on/ off the display

•	Clearly see the feedback from selections

•	All the productivity apps will be clustered together

•	The height adjustment slider will be on the right

•	Notification widget on the top

•	Users will be able to interact with the UI like a tablet

•	Making changes to the setting should be easy

•	The connected devices will be on the left as that is where the actual devices are

•	The UI will have a Apple CarPlay theme as the user wants familiarity

•	The smart devices will be connected via the Mag Safe charger

•	Calendars will also be synced to have continuity

•	The height, standup times, music playlist, notes, notification preference and calendar will be unique to every user and will be authenticated.
</details>
</details>

<details>
  <summary><b>b)	Prototype sketches</b> </summary>
  <img width="589" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/e2fa5ba1-31c2-43b9-b474-b2d976c829a5">
</details>

<details>
  <summary><b>c) Feedback</b> </summary>
Feedback from Resident Advisor manager, CS student friend, work from home uncle: The height reading should be placed lower. Timer App is not useful but pomodoro is. Create a thumb slider. Have height set according to the user profiles.
<br>  
  
 **Improvement:**

  <img width="572" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/9b9a60dd-654d-4152-b9f4-a4125377bea8">

 **Feedback:** Create a window rather than pop up. Have progress green circles on the Apps. Show weather as well.

  <img width="468" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/9b38c490-0955-41c3-83b4-cdf3e9a59222">
</details>



<details>
  <summary><b>d)	Interactive application with interface goals</b></summary>
  Code an be found under Project-1 folder. Run using "npm run dev" in React.
</details>

<details>
  <summary><b>e) Implementation principles</b></summary>
  <details>
    <summary><b>Consider visual design principles in your design:</b></summary>
    i.The UI has simplicity in using. All the features and interactive options are clearly laid out. The feature have regularity and in font size, color and other styling.<br>
ii.	The visual hierarchy is similar to an iPad which the user is familiar with. <br>
iii.	Not much learning is required as it has a layout similar to Apple’s other UI (like CarPlay or iPad). This helps in Learnability as there is a continuity in the UI from other platforms<br>
iv.	Proximity of all the 4 productivity apps is seen. Also the controls are well spaced in their own grids.<br>
v.	Color is same throughout and the user is able to familiarize with it quickly. It has a similar interface to some of the other Apple devices the user knows about.<br>
vi.	Controls are visually represented and easy to access. They provide feedback for every interaction.<br>
  </details>

  <details>
    <summary><b>Provide appropriate feedback for interactions</b></summary>
i For this Mock UI, the user already knows what to click as the controls, apps, sliders, etc. as familiar.<br>
ii.	Drop down menus and windows are interactable with feedback<br>
iii.	The username can be seen at the top<br>
iv.	The buttons have a different click arrow.<br>
  </details>

   <details>
    <summary><b>Elements should be clearly laid out.  Your interface for the smart object should have fixed dimensions (non-resizing, non-responsive layout) with size and aspect ratio that is appropriate for your object.</b></summary>
  i.The mock UI handles resizing.<br>
ii.	Boundaries are clearly laid out on the webpage.   <br>

  </details>
</details>



**B GOALS**
<details>
  <summary><b>1. Enable the user to input a complex set of selections</b></summary>
  Complex actions are used in all the 4 productivity applications. In Timer App you user can use the pomodoro timer. In the Standup, user can adjust the stand-up timer. In the Music App, user can select their playlist, songs and add song to que and play them. In the notes app, user can complete the To do list, choose their desired note app and Add new note. All the apps have a completion green circle around them to show progress. The height adjustment bar can also have complex selections. The Power button turns the display on and off. The devices connected and charging are shown as well.
  <details>
    <summary><b>Sketches</b></summary>
    <img width="569" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/bf567712-18bf-4f7a-a4d2-c3124366bd90">
    
<img width="468" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/b43dfa2f-298d-4a20-b35b-a189fee8882d">
    
  <img width="468" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/bba1fd64-0b67-4c12-a46b-3bec17883b08">
  </details>
  <details>
    <summary><b>Feedback</b></summary>
    Feedback was to change the color of the power button to be red when selected. The dialogue boxes for the apps should be symmetric.
  </details>

</details>


**A GOALS**
<details>
  <summary><b>Display information for different mock users or situations (I have also included Connecting to a mock secondary device element to this with the personal mobile device of each user)</b></summary>
  The table can be personalized and customized by the users. Initially the table will be only for guests. If the user wants to access information from their phone or connect their table configuration settings, they will place their smart mobile device on the magsafe charger. This will charge the phone and also connect it to the table. This acts as authentication for the data transfer. Now, the user will Double click their name from the users button for authentication. There entire data and table settings preferences are now synced. This Handshake between the mobile device and the table is shown in the mock UI Application. The users notification, calendar, height, standup, notes, music preference will be synced to the table. The user will see their name as well.
 <details>
    <summary><b>Sketches</b></summary>
    <img width="562" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/5d5085a2-4933-4e67-b872-dbfed7627044">

  <img width="468" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/94b2ce8d-6502-4bf8-aec9-831b41bf75c9">

<img width="468" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/1e8c3c78-21d0-44e8-90b2-a1d685ef5f31">


  </details>
  <details>
    <summary><b>Feedback</b></summary>
Feedback was to display a message that the data has been synced and the user profile has been authenticated and selected, on the user’s phone.
  </details>
  
</details>

**Interface Description**
  <details>
    <summary><b>External Hardware Interface</b></summary>
    The UI will be on a screen on the bottom right corner (like an iPad) and the magsafe chargers will be on the top right to connect and charge the 3 devices.
    <br>
    
  <img width="871" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/01cd74a7-0439-4c67-93ca-1ae868d5570f">
</details>


  <details>
  <summary><b>Software Interface</b></summary>
    Here is the UI for the display.
  <img width="1319" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/a5c372cb-4a47-4761-9443-64b3a249ffad">
    
  <details>
  <summary><b>Left Widget</b></summary>
    You can see the three devices (phone, smartwatch, earpods) connected with their connection strength and battery progress.
    
<img width="215" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/595c10b8-6489-4c46-b277-c72276bba521">
  </details>

   <details>
  <summary><b>Top Widget</b></summary>
    Here is the notification widget. It changes as per user preference (type of notifications)
    
<img width="776" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/688ef1f6-6f63-449d-b674-95852b347f78">

<img width="763" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/d381bfa8-3c0b-4b4d-a51b-b706f3926643">

  </details>

 <details>
  <summary><b>Productivity Apps</b></summary>
   You have the Pomodoro Timer App with shows the time as well. The Apple standUp app to give user personalized or customized reminders. The Music App with user personalized or customized playlists, songs add to queue and play options. The notes app which can be changed by user for personalization. You also have a user specific calendar for date and daily tasks.
    
<img width="420" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/02fb16d6-56d6-4779-a073-13cac6d1be33">

<img width="233" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/d970a07a-ac3c-44e7-9cf1-cbcd231d17e2">

<img width="340" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/ecb5719d-e65e-4352-9523-a05dfa340bfe">

<img width="160" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/99d680e1-4de5-4a6d-92ba-9a4e99f7d79b">

<img width="236" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/8dca1489-ce75-4a3a-8adc-01f28876bc3e">

<img width="197" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/eca5024f-d170-40c4-bdcc-2229932cfaf2">

<img width="203" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/793a6148-7890-4592-8dfe-e085a7d0e70e">


  </details>


   <details>
  <summary><b>Right Widget</b></summary>
   Shows the name of the active user and date and weather. Also has a slider for height adjustment with a reader. The height can be pre set or customized by the user.
<img width="192" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/f06d69dc-04f2-4b1b-abb2-b3eb6c12dd9b">
  </details>

   <details>
  <summary><b>Control panel</b></summary>
Power button turns the display on or off. Select the user by double clicking after authentication.
     
  <img width="754" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/5956d80f-2f94-4405-adeb-710c9a4fc9b9">

  <img width="1221" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/16c4b063-f997-4c6f-9c0f-5e9a04c75daa">

  <img width="428" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/fc2c049d-df6f-459c-8bb8-7ee3be8987d2">
  
  </details>


  <details>
  <summary><b>External Device Connection</b></summary>
     Select the active user's device here for authentication with magsage and connectivity
<img width="804" alt="image" src="https://github.com/SaumickPradhan/Apple-iTable/assets/85262444/a42f39f3-0e65-4870-80ec-144504cf0d44">

  </details>
  
  
  </details>

