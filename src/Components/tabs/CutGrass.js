import React from "react";
import Tondeuse from "../.././Image/tondeuseImage.jpg";
import Paper from "@material-ui/core/Paper";

export default function CutGrass() {
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
		background: `center / contain no-repeat url(${Tondeuse})`,
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
					A partir de 2&euro;/m<sup>2</sup> TTC
				</p>
				<div style={styleImage} />
			</div>
			<div style={{ width: "50%" }}>
				<h3>Coupe de gazon</h3>
				<p>
					Pour avoir une belle herbe, il est nécessaire de
					l'entretenir régulièrement. Elle doit être tondu{" "}
					<span style={{ fontWeight: "bold" }}>
						&nbsp;2 fois par mois
					</span>
					&nbsp;pendant l'été pour la garder à une hauteur raisonnable
					et conserver un beau rendu. Une tonte plus régulière
					permettra plus de précision au niveau de la longeur de coupe
					pour que{" "}
					<span style={{ fontWeight: "bold" }}>
						&nbsp;la pelouse repousse en meilleur forme
					</span>
					.
				</p>
			</div>
		</Paper>
	);
}
