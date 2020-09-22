"""
Le joueur mise sur un numéro compris entre 0 et 49 (50 numéros en tout). En choisissant son numéro, il y dépose la somme qu'il souhaite miser.

La roulette est constituée de 50 cases allant naturellement de 0 à 49. Les numéros pairs sont de couleur noire, les numéros impairs sont de couleur rouge. Le croupier lance la roulette, lâche la bille et quand la roulette s'arrête, relève le numéro de la case dans laquelle la bille s'est arrêtée. Le numéro sur lequel s'est arrêtée la bille est, naturellement, le numéro gagnant.

Si le numéro gagnant est celui sur lequel le joueur a misé, le croupier lui remet 3 fois la somme misée.

Sinon, le croupier regarde si le numéro misé par le joueur est de la même couleur que le numéro gagnant (s'ils sont tous les deux pairs ou tous les deux impairs). Si c'est le cas, le croupier lui remet 50 % de la somme misée. Si ce n'est pas le cas, le joueur perd sa mise.

Dans les deux scénarios gagnants vus ci-dessus (le numéro misé et le numéro gagnant sont identiques ou ont la même couleur), le croupier remet au joueur la somme initialement misée avant d'y ajouter ses gains. Cela veut dire que, dans ces deux scénarios, le joueur récupère de l'argent. Il n'y a que dans le troisième cas qu'il perd la somme misée. On utilisera pour devise le dollar $ à la place de l'euro pour des raisons d'encodage sous la console Windows.
"""

# Import
from random import randrange

# Porte monnaie du joueur
porte_monnaie = 3000

# Récupère la somme misé par le joueur
def get_player_mise():
    try:
        mise = int(input("Combien voulez vous misez ? "))
        assert 0 < mise <= porte_monnaie
        return mise
    except ValueError: 
        print("Valeur inccorecte. Tapez un nombre entier.")
        get_player_mise()
    except AssertionError:
        if mise > 0:
            print("Vous n'avez pas assez d'argent")
        else:
            print("... Ne trichez pas... Entrez un nombre positif !")
        get_player_mise()

# Récupère le nombre sur lequel le joueur mise
def get_player_nbr():
    try:
        nbr = int(input("Sur quel nombre voulez vous miser ? "))
        assert 0 <= nbr <= 49
        return nbr
    except ValueError: 
        print("Valeur inccorecte. Tapez un nombre entier.")
        get_player_nbr()
    except AssertionError:
        print("Votre nombre doit se trouver entre 0 et 49 inclus.")
        get_player_nbr()

# Récupère le numero gagnant
def get_wheel_nbr():
    return randrange(0, 49)

while porte_monnaie > 0:
    print("Vous avez {}$".format(porte_monnaie))

    player_mise = get_player_mise()
    player_nbr = get_player_nbr()
    wheel_nbr = get_wheel_nbr()

    print("Le numero gagnant est : " + str(wheel_nbr))

    if player_nbr == wheel_nbr:
        print("NUMERO GAGNANT !!!!")
        porte_monnaie = player_mise + player_mise*3
    elif player_nbr % 2 == wheel_nbr % 2:
        print("Même couleur !")
        porte_monnaie = player_mise + player_mise/2
    else:
        print("Perdu !")