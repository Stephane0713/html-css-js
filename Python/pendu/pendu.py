# Imports
from random import choice
from pickle import Pickler, Unpickler
import os

os.chdir("./Python/pendu")

# Liste mots
words_list = ["banane", "citron", "ananas", "orange", "fraise", "cerise"]

# Initialise le score 
def init_score(file):
    try:
        with open(file, "rb") as scores_file:
            score_dict = Unpickler(scores_file).load()
    except:
        score_dict = {}
    return score_dict

# Récupère un mot au hasard
def get_random_elt(elts_list):
    return choice(elts_list)

# Génére un mot masqué à partir d'un mot et d'une liste de lettre à affiché
def gen_masked_word(word, letters_list):
    word_masked = ""
    for letter in word:
        if letter in letters_list:
            word_masked += letter
        else:
            word_masked += "*"
    return word_masked

# Récupère l'input du joueur, vérifie si l'input est une lettre et retourne cette lettre
def get_player_input():
    player_input = input("Tapez une lettre : ")
    if not(player_input.isalpha()) or len(player_input) > 1:
        print("Valeur invalide")
        get_player_input()
    return player_input.lower()

# Compare le nouveau score avec l'ancien et garde le plus élevé. Retourne le dico mis à jour 
def get_player_score(pseudo, score, dico):
    if pseudo in dico:
        score = max(dico[pseudo], score)
    dico.update([(pseudo, score)])
    return (dico)

# Initialisation
game_over = False
lives_left = 8
word_random = get_random_elt(words_list)
letters_guessed = []
word_masked = gen_masked_word(word_random, letters_guessed)
scores = init_score("scores")
player_pseudo = input("Entre votre pseudo : ")

# Game start
while not(game_over):
    print(word_masked)
    player_input = get_player_input()
    if player_input in letters_guessed:
        print("Vous avez déjà essayé la lettre " + player_input)
    elif player_input in word_random:
        letters_guessed.append(player_input)
    else: 
        letters_guessed.append(player_input)
        lives_left -= 1
        print("{} ne se trouve pas dans le mot, il vous reste {} essai(s)".format(player_input, lives_left))

    word_masked = gen_masked_word(word_random, letters_guessed)
    
    if word_masked == word_random:
        print("Bien joué !  Le mot était {}.".format(word_random))
        game_over = True
        
        player_score = lives_left + len(word_random)
        scores = get_player_score(player_pseudo, player_score, scores)
       
        with open("scores", "wb") as scores_file:
            Pickler(scores_file).dump(scores)      
    elif lives_left <= 0:
        print("Vous avez perdu :/ Le mot était {}.".format(word_random))
        game_over = True

print(scores)