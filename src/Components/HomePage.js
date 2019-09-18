import React, { createRef } from "react";
import background from ".././Image/bannerBackground.jpg";
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import AppBar from ".././GlobalComponents/AppBar";
import DemandeDevis from "./DemandeDevis";
import LogoBlanc from ".././Image/logoBlanc.png";
import LogoBlancTest from ".././Image/logo.png";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CutGrass from "./tabs/CutGrass";
import EntretienHaie from "./tabs/entretienHaie";
import PlanteGazon from "./tabs/planteGazon";
import PoseHerbe from "./tabs/poseHerbe";
import jardin1 from ".././Image/jardin1.jpg";
import jardin2 from ".././Image/jardin2.jpg";
import jardin3 from ".././Image/jardin3.jpg";
import jardin4 from ".././Image/jardin4.jpg";
import jardin5 from ".././Image/jardin5.jpg";
import jardin6 from ".././Image/jardin6.jpg";
import jardin7 from ".././Image/jardin7.jpg";

const useStyles = makeStyles({
	banner: {
		width: "100%",
		height: "100vh",
		background: `center  url(${background})`,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "column"
	},

	logoText: {
		marginTop: 100,
		display: "flex",
		alignItems: "center",
		flexDirection: "column"
	},

	logoBlanc: {
		background: `center / contain url(${LogoBlancTest})`,
		width: 200,
		height: 200
	},

	div: {
		paddingTop: 95,
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		background: "#fafafa"
	},

	ContainerButton: {
		display: "flex",
		minHight: 80,
		width: "80%",
		padding: "0 10%",
		borderTop: " 1px solid #6d6d6d",
		borderBottom: " 1px solid #6d6d6d"
	},

	link: {
		width: "25%",
		height: "100%"
	},

	button: {
		padding: 20,
		width: "100%",
		height: "100%",
		"&:focus": {
			background: "#bbbbbb"
		}
	}
});

export default function HomePage() {
	const classes = useStyles();

	const ref0 = createRef();
	const ref2 = createRef();
	const ref1 = createRef();
	const ref3 = createRef();
	const handleClick = ref =>
		ref.current.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});

	return (
		<div>
			<header className={classes.banner}>
				<AppBar ref0={ref0} ref1={ref1} ref2={ref2} ref3={ref3} />
				<div />
				<div className={classes.logoText}>
					<div className={classes.logoBlanc} />
				</div>

				<Fab
					variant="extended"
					style={{ marginBottom: 20, background: "white" }}
					onClick={() => handleClick(ref0)}
				>
					EN SAVOIR PLUS
				</Fab>
			</header>
			<main>
				<div className={classes.div} ref={ref0}>
					<Container maxWidth="md">
						<p style={{ fontSize: "1.2em" }}> Qui suis-je ? </p>
						<p>
							Je suis&nbsp;
							<h1 style={{ fontSize: "1em", display: "inline" }}>
								expert jardinier-paysagiste.
							</h1>
							&nbsp;Depuis plus de 10 ans je design puis entretien
							les jardins de mes clients. Que ce soit de la coupe
							de haie, de la pose d'herbe, de&nbsp;
							<h2 style={{ fontSize: "1em", display: "inline" }}>
								créer des jardins moderne
							</h2>
							. J'excerce ce métier par passion et cela se ressent
							sur la qualité de mes "oeuvres".
						</p>
						<hr style={{ margin: 40 }} />
						<p style={{ fontSize: "1.2em" }}>
							Pourquoi me choisir ?
						</p>
						<p>
							L'entretien et la création d'un jardin
							nécessite&nbsp;
							<span style={{ fontWeight: "bold" }}>
								l'attention d'un jardinier professionel
								éxpérimenté
							</span>
							. Je vous aiderait à mettre en place une
							architecture{" "}
							<span style={{ fontWeight: "bold" }}>
								{" "}
								adapté à votre terrain et à vos besoins
							</span>
							. Je vous conseillerai sur les solutions les plus
							proches de vos attentes. Enfin je m'occuperai
							personnellement de mettre en place ceci grâce à mon
							expertise en tant que jardinier. Me confier votre
							jardin{" "}
							<span style={{ fontWeight: "bold" }}>
								c'est faire confiance à un professionnel réputé
								avec plus de 10 ans d'expérience
							</span>
							.
						</p>
						<hr style={{ margin: 40 }} />
						<h2
							style={{
								margin: 0,
								fontWeight: "normal",
								fontSize: "1.2em"
							}}
						>
							Vous voulez efféctuez des travaux de jardineries ?
						</h2>
						<p>
							Faites votre{" "}
							<span style={{ fontWeight: "bold" }}>
								demande de devis gratuit
							</span>
						</p>
						<Fab variant="extended">
							<DemandeDevis />
						</Fab>
					</Container>
				</div>
				<div
					className={classes.div}
					style={{ geight: "80vh" }}
					ref={ref1}
				>
					<Router>
						<div className={classes.ContainerButton}>
							<Link to="/" className={classes.link}>
								<Button className={classes.button}>
									coupe de gazon
								</Button>
							</Link>
							<Link to="entretienHaie" className={classes.link}>
								<Button className={classes.button}>
									entretien des haies
								</Button>
							</Link>
							<Link to="planteGazon" className={classes.link}>
								<Button className={classes.button}>
									mise en terre de gazon
								</Button>
							</Link>
							<Link to="poseHerbe" className={classes.link}>
								<Button className={classes.button}>
									pose d'herbe synthétique
								</Button>
							</Link>
						</div>
						<Route exact path="/" component={CutGrass} />
						<Route
							path="/entretienHaie"
							component={EntretienHaie}
						/>
						<Route path="/planteGazon" component={PlanteGazon} />
						<Route path="/poseHerbe" component={PoseHerbe} />
					</Router>
				</div>
				<div
					className={classes.div}
					style={{ height: "80vh" }}
					ref={ref2}
				>
					<Container>
						<p
							style={{
								fontSize: "1.3em",
								fontFamily: "'Pacifico', cursive"
							}}
						>
							Quelques-une de mes réalisations
						</p>
						<div
							style={{
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "space-around",
								marginTop: 50
							}}
						>
							<img
								style={{ width: "48.5%", margin: 5 }}
								src={jardin1}
								alt="Un beau jardin"
							/>
							<img
								style={{
									width: "48.5%",
									margin: 5
								}}
								src={jardin2}
								alt="Un beau jardin"
							/>
							<img
								style={{ width: "48.5%", margin: 5 }}
								src={jardin3}
								alt="Un beau jardin"
							/>
							<img
								style={{ width: "48.5%", margin: 5 }}
								src={jardin4}
								alt="Un beau jardin"
							/>
							<img
								style={{ width: "48.5%", margin: 5 }}
								src={jardin5}
								alt="Un beau jardin"
							/>
							<img
								style={{ width: "48.5%", margin: 5 }}
								src={jardin6}
								alt="Un beau jardin"
							/>
							<img
								style={{
									width: "48.5%",
									margin: 5,
									marginBottom: 40
								}}
								src={jardin7}
								alt="Un beau jardin"
							/>
						</div>
					</Container>
				</div>
			</main>
		</div>
	);
}
