scores = {
    "A": 200,
    "B": 400,
    "C": 300,
}
# J'AI BESOIN DE
# Un pseudo 
# Un score

# JE RETOURNE
# Un tuple dans le format (pseudo, scores)

# JE DOIS :
# Recupéré le pseudo du joueur
player_name = input("Votre nom : ")
# Récupéré le score du joueur
new_score = 300

# Compare le nouveau score avec l'ancien et garde le plus élevé. Retourne le dico mis à jour 
def get_player_score(pseudo, score, dico):
    if pseudo in dico:
        score = max(dico[pseudo], score)
    dico.update([(pseudo, score)])
    return (dico)

# Update mon dict scores
scores = get_player_score(player_name, new_score, scores)
print(scores)