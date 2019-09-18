import React from "react";
import Paper from "@material-ui/core/Paper";
import Image from "../.././Image/haiesImage.jpg";

export default function EntretienHaie() {
	const styleContainer = {
		display: "flex",
		minHeight: "50vh",
		alignItems: "center",
		justifyContent: "space-around",
		margin: "1% 10%"
	};

	const styleImage = {
		marginTop: "5%",
		width: 200,
		height: 133,
		background: `center / contain no-repeat url(${Image})`,
		borderRadius: 5
	};

	const styleText = {
		width: "50%",
		color: "white",
		textShadow: "0 0 2px black"
	};

	return (
		<Paper elevation="3" style={styleContainer}>
			<div
				style={{
					width: "30%",
					height: "70%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center"
				}}
			>
				<p style={{ fontSize: "1.1em", fontWeight: "bold" }}>
					A partir de 12&euro;/m<sup>2</sup> TTC
				</p>
				<div style={styleImage} />
			</div>
			<div style={{ width: "50%" }}>
				<h3>Entretien des haies</h3>
				<p>
					Un jardin propre ne peut pas se permettre d'avoir des haies
					négligées.{" "}
					<span style={{ fontWeight: "bold" }}>
						&nbsp;Une coupe régulière de vos haies&nbsp;
					</span>
					permettra de faire ressortir la{" "}
					<span style={{ fontWeight: "bold" }}>
						&nbsp;beauté de votre jardin
					</span>
					. Elle est aussi important que la tonte du gazon.
				</p>
			</div>
		</Paper>
	);
}
