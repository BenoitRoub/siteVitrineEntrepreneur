import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
	navLink: {
		width: "100%",
		"&:hover": {
			cursor: "pointer"
		}
	}
});

export default function DemandeDevis() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [devis, setDevis] = React.useState(false);
	const [prix, setPrix] = React.useState(0);

	function handleClickOpen() {
		setOpen(true);
	}

	function handleClose() {
		setOpen(false);
	}

	function dispatchDevis() {
		setDevis(!devis);
	}

	function closeDevis() {
		setDevis(!devis);
		setPrix(0);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setPrix(prix + tonte * 2 + haie * 12 + gazon * 8 + synthé * 25);
		handleClose();
		dispatchDevis();
	}

	const [state, setState] = React.useState({
		tonte: false,
		haie: false,
		gazon: false,
		synthé: false
	});

	const [stateNumber, setStateNumber] = React.useState({
		tonte: 0,
		haire: 0,
		gazon: 0,
		synthé: 0
	});

	const handleChange = name => event => {
		setState({ ...state, [name]: event.target.checked });
	};

	const handleNumberChange = name => event => {
		setState({ ...state, [name]: event.target.value });
	};

	const { tonte, haie, gazon, synthé } = state;
	const { tonteN, haieN, gazonN, synthéN } = stateNumber;

	return (
		<div>
			<p className={classes.navLink} onClick={handleClickOpen}>
				Demande de devis
			</p>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">
					Demande de Devis
				</DialogTitle>
				<DialogContent>
					<FormGroup>
						<FormControlLabel
							control={
								<Checkbox
									checked={tonte}
									onChange={handleChange("tonte")}
									value="tonte"
								/>
							}
							label="Tonte de gazon"
						/>
						{tonte ? (
							<TextField
								autoFocus
								margin="dense"
								label="m2"
								type="number"
								fullWidth
								onChange={handleNumberChange("tonte")}
							/>
						) : null}
						<FormControlLabel
							control={
								<Checkbox
									checked={haie}
									onChange={handleChange("haie")}
									value="haie"
								/>
							}
							label="Entretien des haies"
						/>
						{haie ? (
							<TextField
								autoFocus
								margin="dense"
								label="m2"
								type="number"
								fullWidth
								onChange={handleNumberChange("haie")}
							/>
						) : null}
						<FormControlLabel
							control={
								<Checkbox
									checked={gazon}
									onChange={handleChange("gazon")}
									value="gazon"
								/>
							}
							label="Mise en terre de gazon"
						/>
						{gazon ? (
							<TextField
								autoFocus
								margin="dense"
								label="m2"
								type="number"
								fullWidth
								onChange={handleNumberChange("gazon")}
							/>
						) : null}
						<FormControlLabel
							control={
								<Checkbox
									checked={synthé}
									onChange={handleChange("synthé")}
									value="synthé"
								/>
							}
							label="Pose d'herbe synthétique"
						/>
						{synthé ? (
							<TextField
								autoFocus
								margin="dense"
								label="m2"
								type="number"
								fullWidth
								onChange={handleNumberChange("synthé")}
							/>
						) : null}
					</FormGroup>
					<TextField
						margin="dense"
						placeholder="Vous pouvez décrire votre projet/ vos attentes pour un devis plus adapté."
						type="text"
						fullWidth
						multiline="true"
						rows="4"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Retour
					</Button>
					<Button
						type="submit"
						onClick={handleSubmit}
						color="primary"
					>
						Envoyer
					</Button>
				</DialogActions>
			</Dialog>
			{devis ? (
				<Paper
					style={{
						position: "fixed",
						top: "38%",
						left: "40%",
						width: "20vw"
					}}
				>
					<p
						style={{
							padding: "10px"
						}}
					>
						Cette opération couterait environ {prix}&euro; TTC
					</p>
					<Button
						style={{
							margin: "10px"
						}}
						onClick={closeDevis}
					>
						Retour
					</Button>
				</Paper>
			) : null}
		</div>
	);
}
