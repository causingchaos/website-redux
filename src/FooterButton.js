import React from 'react';
import IconButton from 'material-ui/IconButton';
import FaAWS from "react-icons/lib/fa/amazon.js"
import FaLinkedIn from 'react-icons/lib/fa/linkedin-square';
import FaSoundCloud from 'react-icons/lib/fa/soundcloud';
import GitLab from 'react-icons/lib/fa/gitlab';
import FaFacebook from 'react-icons/lib/fa/facebook-square'
import FaHtml5 from 'react-icons/lib/fa/html5'
import FaBolt from 'react-icons/lib/fa/bolt';


const IconButtonExampleSize = () => (
	<div>
		<IconButton tooltip="LinkedIn - Justin Berry" touch={true} tooltipPosition="top-right"
		href={"https://www.linkedin.com/in/justin-berry"}>
			<FaLinkedIn size={27} color={"black"} opacity={"0.6"}/>
		</IconButton>
		<IconButton tooltip="GitLab - Justin Berry" touch={true} tooltipPosition="top-right"
		href={"https://gitlab.com/causingchaos"}>
			<GitLab size={27} color={"black"} opacity={"0.6"}/>
		</IconButton>
		<IconButton tooltip="Soundcloud - Justin Berry" touch={true}
								tooltipPosition="top-right"
								href={"https://soundcloud.com/chaosfrequncy"}
		>
			<FaSoundCloud size={27} color={"black"} opacity={"0.6"}/>
		</IconButton>
		<IconButton tooltip="Amazon Web Services" touch={true} tooltipPosition="top-right" href={"https://aws.amazon.com"}>
			<FaAWS size={27} color={"black"} opacity={"0.6"}/>
		</IconButton>
		<IconButton tooltip="Serverless" touch={true} tooltipPosition="top-right" href={"https://serverless.com/"}>
			<FaBolt size={27} color={"black"} opacity={"0.6"}/>
		</IconButton>

	</div>
);

const awsIcon = () => (
	<svg width="22" height="22" viewBox="0 0 1024 1024">
		<path d='M0 197.078l455.039 152.875v671.915l-452.051-159.616zM567.126 1024l456.874-161.749v-660.693l-455.084 146.345zM511.487 271.444l417.579-140.544-417.579-130.9-427.435 130.858z'></path>
	</svg>
);



const styles = {
	smallIcon: {
		width: 25,
		height: 25,
	},
	mediumIcon: {
		width: 48,
		height: 48,
	},
	largeIcon: {
		width: 60,
		height: 60,
	},
	small: {
		width: 72,
		height: 72,
		padding: 16,
	},
	medium: {
		width: 96,
		height: 96,
		padding: 24,
	},
	large: {
		width: 120,
		height: 120,
		padding: 30,
	},
};


export default IconButtonExampleSize;





