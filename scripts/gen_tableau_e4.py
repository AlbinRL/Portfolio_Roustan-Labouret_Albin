import html

sections = [
    ("RÉALISATIONS EN COURS DE FORMATION EN PREMIÈRE ANNÉE", [
        ("Machine de Rube Goldberg", "07/09/2024 au 12/09/2024", [None, None, None, "X", None, None]),
        ("PHP Bataille Naval (php)", "20h", [None, None, None, "X", None, "X"]),
        ("Gestion BDD et MVC sur des gîtes", "30/11/2024 au 22/12/2024", ["X", None, None, "X", None, None]),
        ("Création d'un site web avec optimisation SEO (html, css)", "10/01/2025 au 13/02/2025", ["X", "X", "X", "X", None, "X"]),
        ("Projet solution web (Hôtel Neptune)", "08/01/2025 au 04/03/2025", ["X", "X", "X", "X", "X", "X"]),
        ("Scraping d'informations formaté en graphe avec Python", "08/04/2025 au 08/05/2025", ["X", "X", None, "X", None, None]),
        ("Création d'un portfolio personnel", "02/02/2025 au 30/05/2025", ["X", None, "X", None, None, "X"]),
    ]),
    ("RÉALISATIONS EN COURS DE FORMATION EN SECONDE ANNÉE", [
        ("Application flutter avec androide studio", "20h", ["X", None, None, "X", "X", "X"]),
        ("Site en Vue.js", "25/11/2025 au 25/12/2025", [None, None, "X", "X", None, "X"]),
    ]),
    ("PROJETS E6", [
        (
            "Développement d'un site web et d'une application mobile de gestion et réservation de bureaux et salles de réunions (projets BTS)",
            "2 mois",
            ["X", "X", "X", "X", "X", "X"],
        ),
    ]),
    ("RÉALISATIONS EN MILIEU PROFESSIONNEL EN PREMIÈRE ANNÉE", [
        (
            "Refonte des sites particulier et professionnel de l'entreprise Infoboost. (wordpress)",
            "21/04/2025 au 13/06/2025",
            ["X", "X", "X", "X", "X", "X"],
        ),
        (
            "Réalisation de stories instagram pour mettre en avant les avis client.",
            "21/04/2025 au 13/06/2025",
            [None, None, "X", "X", "X", None],
        ),
    ]),
    ("RÉALISATIONS EN MILIEU PROFESSIONNEL EN SECONDE ANNÉE", [
        ("Réalisation d'un site de streaming (html, css, php, js).", "—", ["X", None, None, "X", None, "X"]),
        ("Conception de la base de données d'un site de streaming.", "—", ["X", None, None, "X", None, None]),
        (
            "Mise en place d'une machine virtuelle pour l'hébergement d'un site web. (VMware)",
            "—",
            ["X", None, None, None, "X", None],
        ),
    ]),
]


def cell(v):
    if v == "X":
        return '<td class="check">✓</td>'
    return "<td></td>"


out = []
for sec, items in sections:
    out.append(f'<tr class="section-row"><td colspan="8">{html.escape(sec)}</td></tr>')
    for title, period, marks in items:
        out.append(
            f'<tr><td class="project">{html.escape(title)}</td>'
            f'<td class="period">{html.escape(period)}</td>'
            + "".join(cell(m) for m in marks)
            + "</tr>"
        )

path = r"c:\Users\Albin\Documents\EPSI\Portfolio\Portfolio\public\partials\tableau-e4-body.html"
with open(path, "w", encoding="utf-8") as f:
    f.write("".join(out))
print("Written", path)
