import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const BotRedirect = ({ url, message }) => {
	const [fbus, setfbus] = useState([])
	useEffect(() => {


		axios
		.get('https://mlmodeltraining.azurewebsites.net/predict/galle')
		.then((res) => {
		   const arr = res.data;
		   console.log(arr);
		   setfbus(arr);
  
		});
	
			});
		
	   

  return (
    <div>
      <a href={url} target="_blank">
		{message}
       
		{fbus.map((item) => (
           <div>  
             <b> <h7>Final Destination : {item.message}</h7></b>
           
             
            </div>
              ))}

      </a>
	 
    </div>
  );
};
const steps = [
	{
		id: '0',
		message: 'Hey ',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '1',
	}, {
		id: '1',

		// This message appears in
		// the bot chat bubble
		message: 'Please Enter the District Here',
		trigger: '2'
	}, {
		id: '2',

		// Here we want the user
		// to enter input
		user: true,
		trigger: '3',
	}, {
		id: '3',
		message: "  {previousValue} Pharmacies",
		trigger: 4
	}, {
		id: '4',
    component: (
      <BotRedirect
        message="Pharmacies"
        url="https://mlmodeltraining.azurewebsites.net/predict/galle"
	
		
      />
    ),
		end: true
	}
];

// Creating our own theme
const theme = {

	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	
	floating: true,
};

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					// This appears as the header
					// text for the chat bot
					headerTitle="Pharmacy Bot"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default App;