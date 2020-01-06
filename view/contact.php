				

			<div class="slidePortfolio">


					<form method="post"  class="formContact flexColumn slideInside" action="index.php?action=sendMail">
						
						<div id="txtContact">
							<p>Un projet, une envie, une question ou simplement envie d'échanger autour d'un café ? <br>Envoyez-moi un message</p>
						</div>
						<?= $confirmation ?>
							<div class="flexRow" id="formulaire">
								<div class="flexColumn">
									<label for="userMail" class="colorOne">Votre E-mail</label>
									<div class='messErrorForm'>
										<p class='userMail'></p>
									</div>
									<input type ="email" id ="userMail" name ="userMail" value="" placeholder="...de préférence valide" contenteditable ="true" autocomplete="off">
									<br>
								</div>
								<div class="flexColumn">
									<label for="userName" class="colorOne">Votre petit nom</label>
									<div class='messErrorForm'>
										<p class='userName'></p>
									</div>
									<input type ="text" id ="userName" name ="userName" value="" placeholder="Sir Tristepin" contenteditable ="true" autocomplete="off">
								</div>
							</div>

							<div id="parchemin">
								<label for="userMess" class="colorOne">Votre message</label>
								<div class='messErrorForm'>
									<p class='userMess'></p>
								</div>
								<textarea name="userMess" id="userMess">Pas de Sindarin, ni de Klingon ni de Dothraki...</textarea>
								<img src ="public/img/parchemin.png"  alt="parchemin violet">
							</div>

							<div id="linkedin">
								<a href="https://www.linkedin.com/in/a-collin-uimainon"><span class="fab fa-linkedin"></span></a>
							</div>
							<div id="confirmSendMail" class="flexColumn">
								<p id="confirmSend"></p>
							</div>
							<div id="pigeon">
								<button type="submit" value="Go !" id='sendMail' name='sendMail'>
								<img src="public/img/deco/pigeon1.png"  alt="pigeon">
								</button>
							</div>

							
					</form>
			
			</div>

 