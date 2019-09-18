import React from "react";
import Paper from "@material-ui/core/Paper";
import Image from "../.././Image/gazonSynthétiqueImage.jpg";

export default function PoseHerbe() {
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
					A partir de 25&euro;/m<sup>2</sup> TTC
				</p>
				<div style={styleImage} />
			</div>
			<div style={{ width: "50%" }}>
				<h3>Pose de gazon synthétique</h3>
				<p>
					Une pelouse classique nécessite beaucoup d'entretien, une
					coupe et un arrosage régulier. Selon le budget ou le temps
					de chacun il ne s'agit pas nécessairement de la meilleur
					solution. Le gazon synthétique est
					<span style={{ fontWeight: "bold" }}>
						&nbsp;simple d'entretien ainsi que moins chère&nbsp;
					</span>{" "}
					sur le long terme. En effet il ne nécessite
					<span style={{ fontWeight: "bold" }}>
						&nbsp;ni coupe, ni arrosage
					</span>
					. C'est donc un choix idéal pour posséder un jardin très
					propre toute au long de l'année à moindre coût.
				</p>
			</div>
		</Paper>
	);
}
