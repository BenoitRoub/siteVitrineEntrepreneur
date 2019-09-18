import React from "react";
import Paper from "@material-ui/core/Paper";
import Image from "../.././Image/gazonImage.jpg";

export default function PlanteGazon() {
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
					A partir de 8&euro;/m<sup>2</sup> TTC
				</p>
				<div style={styleImage} />
			</div>
			<div style={{ width: "50%" }}>
				<h3>Mise en terre de gazon</h3>
				<p>
					Semer du gazon nécessite plusieurs étapes, nettoyer le
					terrain, niveler le sol, semer les graines puis les
					récouvrir et enfin passer le roueau pour une pousse optimal.
					C'est donc{" "}
					<span style={{ fontWeight: "bold" }}>
						&nbsp;un réel travail&nbsp;
					</span>{" "}
					qui nécessite des connaissances pour obtenir
					<span style={{ fontWeight: "bold" }}>
						&nbsp;une pelouse de qualité
					</span>
					.
				</p>
			</div>
		</Paper>
	);
}
