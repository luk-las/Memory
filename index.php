<!DOCTYPE html>
<html lang="pl">
<head>

	<meta charset="utf-8">
	<title>Flags game</title>
	<meta http-equiv="X-Ua-Compatible" content="IE=edge,chrome=1">
	<link rel="stylesheet" href="main.css">
	<link href="https://fonts.googleapis.com/css2?family=Kelly+Slab&display=swap" rel="stylesheet">

</head>

<body>

	<header>		
		<h1>Sprawdź swoją pamięć</h1>
		<p>Flagi świata</p>
	</header>
	
	<main>
		<article>
			<div class="board">
				
				<div class="cards">
					<label>Wybierz ile par chcesz znaleźć<br/><input type="number" id="numberOP" value="8" step="1" min="1" max="21"></label><br/>
					<input type="submit" value="Zatwiedź" onclick="showCards()">
				</div>				
				<div class="score"></div>
				
			</div>			
		</article>
	</main>

	<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
	<script src="memory.js"></script>
	
</body>
</html>