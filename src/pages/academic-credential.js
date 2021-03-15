import React from 'react';
import Certificate01 from '../assets/certificates/certificate01.png';
import Certificate02 from '../assets/certificates/certificate02.png';
import CCNA from '../assets/certificates/ccna.png';
import BachelorCertificate from '../assets/certificates/provisionalCertificate.png'
import NationalYouthTrainingCertificate from '../assets/certificates/NationalYouthTraining.png';




const AcademicCredential=() =>{
    return (
		<h3>
			<div style={{ background: 'coral', height: '80px' }}>
				<h1>Academic Credential</h1>
			</div>
			<h3>Certificate of Javascript beginner to pro</h3>
			<img className="w-100" src={Certificate01} alt="" />

			<h3>Certificate of Javascript Essential</h3>
			<img className="w-100" src={Certificate02} alt="" />

			<h3>Cisco Certificate of Network Administration</h3>
			<img className="w-100" src={CCNA} alt="" />

			<h3>Bachelor of Business Administration</h3>
			<img className="w-100" src={BachelorCertificate} alt="" />

			<h3>National Youth Training</h3>
			<img className="w-100" src={NationalYouthTrainingCertificate} alt="" />
		</h3>
	);
}

export default AcademicCredential;