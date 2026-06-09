/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Step } from "./types";

export const stepsData: Step[] = [
  {
    id: 1,
    title: "La bousculade",
    day: "Lundi - Récréation du matin",
    location: "Dans la cour d'école",
    situation: "Lucas, un nouvel élève timide, marche tranquillement dans la cour. Soudain, Thomas, un camarade de classe habitué à intimider, le bouscule exprès et fait tomber tous ses cahiers dans la boue sous tes yeux. Thomas ricane : 'Regarde où tu vas, le binoclard !'",
    choices: [
      {
        id: 1,
        text: "Tu t'approches chaleureusement et t'accroupis pour aider Lucas à ramasser ses affaires devant tout le monde.",
        score: 1,
        feedback: "Bravo ! En aidant Lucas, tu lui montres qu'il n'est pas seul face à l'injustice. Ce geste courageux montre à Thomas que sa méchanceté ne fait pas rire tout le monde."
      },
      {
        id: 2,
        text: "Tu détournes les yeux et tu t'éloignes pour aller jouer au ballon plus loin avec tes copains.",
        score: 0,
        feedback: "Tu as préféré éviter les ennuis. C'est une réaction humaine par peur, mais Lucas se retrouve bien seul et triste alors qu'il avait cruellement besoin d'aide."
      },
      {
        id: 3,
        text: "Tu ricanes discrètement avec les autres élèves pour que Thomas ne te prenne pas pour cible à ton tour.",
        score: -1,
        feedback: "Rire du malheur des autres encourage le harceleur. Thomas se sent fort et approuvé par ton comportement, tandis que Lucas se sent humilié par tout le groupe."
      }
    ]
  },
  {
    id: 2,
    title: "Le plateau solitaire",
    day: "Lundi - Pause déjeuner",
    location: "La cantine de l'école",
    situation: "Lucas cherche une place pour poser son plateau dans la cantine très bruyante. Thomas et ses copains s'asseyent sur les chaises libres de la table d'à côté et crient : 'C'est complet pour les nuls, va manger ailleurs !'. Lucas baisse la tête et s'apprête à s'installer seul près des poubelles.",
    choices: [
      {
        id: 1,
        text: "Tu l'appelles d'un grand signe amical et tu lui proposes de s'installer à table à côté de toi.",
        score: 1,
        feedback: "Excellente réaction ! L'intégration est l'arme la plus forte face à l'isolement. Lucas retrouve le sourire et passe un repas rassurant à tes côtés."
      },
      {
        id: 2,
        text: "Tu ressens un pincement au cœur pour lui, mais tu manges en évitant d'attirer l'attention de Thomas.",
        score: 0,
        feedback: "Éprouver de l'empathie est positif, mais sans action réelle, Lucas reste exclu. Inviter un camarade isolé est simple, sécurisant et change son quotidien."
      },
      {
        id: 3,
        text: "Tu te moques aussi et souris en murmurant : 'C'est vrai qu'il n'a pas d'amis, il fait de la peine !'.",
        score: -1,
        feedback: "Ce commentaire enfonce Lucas un peu plus. En participant ainsi à moquer son exclusion, tu contribues à propager la dynamique toxique des harceleurs."
      }
    ]
  },
  {
    id: 3,
    title: "Le bégaiement",
    day: "Lundi - Après-midi",
    location: "La salle de classe de CM2",
    situation: "Au tableau, Lucas doit résoudre un problème mathématique. Stressé par le regard des autres, il bégaye et fait une erreur. Thomas chuchote bruyamment derrière ton dos : 'Quel bouffon, il sait même pas parler !'. Quelques rires timides éclatent.",
    choices: [
      {
        id: 1,
        text: "Tu te retournes et dis doucement à Thomas : 'Arrête Thomas, laisse-le se concentrer, s'il te plaît !'.",
        score: 1,
        feedback: "Superbe ! Tu as posé des limites respectueuses mais fermes. En agissant ainsi, tu exprimes que la classe ne tolère pas les commentaires méprisants."
      },
      {
        id: 2,
        text: "Tu gardes le silence en attendant patiemment que l'enseignante intervienne d'elle-même.",
        score: 0,
        feedback: "La maîtresse finit par demander le silence, mais Lucas a quand même entendu les rires. Montrer ton soutien à un camarade en difficulté est important."
      },
      {
        id: 3,
        text: "Tu souris et te moques doucement en chuchotant avec Thomas pour rester dans son bon groupe.",
        score: -1,
        feedback: "Rire des difficultés d'apprentissage d'un camarade détruit sa confiance en lui. Tu as encouragé un climat scolaire hostile où l'erreur est punie par la honte."
      }
    ]
  },
  {
    id: 4,
    title: "La barrière devant le portail",
    day: "Mardi - Arrivée matinale",
    location: "Le portail d'entrée",
    situation: "Devant la grille de l'école, Thomas et deux de ses camarades barrent physiquement le chemin à Lucas. Ils l'appellent 'Le Déchet' et exigent qu'il s'incline pour entrer. Lucas est pétrifié et reste bloqué dehors sous la pluie.",
    choices: [
      {
        id: 1,
        text: "Tu incites plusieurs camarades à avancer ensemble, et vous passez tous en groupe en accompagnant Lucas.",
        score: 1,
        feedback: "Magnifique ! La force de la solidarité collective est incroyable. Devant une classe unie qui refuse son jeu, Thomas a été obligé de s'écarter sans histoire."
      },
      {
        id: 2,
        text: "Tu presses le pas pour franchir le portail rapidement sans regarder Lucas, inquiet d'être en retard.",
        score: 0,
        feedback: "Tu t'es protégé en premier, mais Lucas est resté bloqué dehors à la merci des intimidations. Laisser faire le harceleur valide son pouvoir."
      },
      {
        id: 3,
        text: "Tu regardes la scène et dis bien fort : 'Il est trop faible Lucas, il n'a qu'à leur rentrer dedans !'.",
        score: -1,
        feedback: "C'est accuser la victime de sa propre faiblesse. Lucas est paralysé par la peur accumulée. Rejeter la faute sur lui est injuste et l'isole encore plus."
      }
    ]
  },
  {
    id: 5,
    title: "Le croche-pied sous le préau",
    day: "Mardi - Récréation du matin",
    location: "Sous le grand préau",
    situation: "Alors que Lucas marche calmement pour aller ranger ses livres, un ami de Thomas tend la jambe exprès. Lucas trébuche et tombe lourdement. Son genou frotte le sol, et il grimace. Tout le monde tourne la tête en ricanant.",
    choices: [
      {
        id: 1,
        text: "Tu vas tout de suite vers Lucas, tu l'aides à se relever et tu l'accompagnes voir le surveillant de récréation.",
        score: 1,
        feedback: "Excellent réflexe civique ! Tu apportes une aide matérielle immédiate ainsi qu'un réconfort direct, tout en dirigeant ton camarade vers les adultes."
      },
      {
        id: 2,
        text: "Tu te dis : 'Aïe, ça devait faire mal', mais tu continues de discuter avec tes propres amis.",
        score: 0,
        feedback: "Ton empathie reste passive. Lucas se retrouve face à un mur d'indifférence qui le blesse parfois autant que le croche-pied physique."
      },
      {
        id: 3,
        text: "Tu cries 'Bien joué, la cascade !' en applaudissant pour faire rire tes copains.",
        score: -1,
        feedback: "C'est de la complicité active particulièrement destructrice. Célébrer des violences physiques dégrade le respect humain indispensable à l'école."
      }
    ]
  },
  {
    id: 6,
    title: "Le goûter racketté",
    day: "Mardi - Milieu de journée",
    location: "Le couloir de la cantine",
    situation: "Dans la file d'attente pour entrer, Thomas s'empare de la poche de Lucas et lui prend sa brioche et sa compote de goûter en chuchotant : 'Si tu dis quoi que ce soit, tu vas le regretter cet après-midi'. Lucas accepte en tremblant de peur.",
    choices: [
      {
        id: 1,
        text: "Tu t'éloignes pour aller prévenir discrètement l'adulte responsable de la cantine de ce vol.",
        score: 1,
        feedback: "C'est le parfait geste d'alerte ! Signaler un racket à un éducateur n'est pas 'cafarder pour nuire', c'est 'alerter pour protéger et réparer'. Les adultes ont besoin de savoir."
      },
      {
        id: 2,
        text: "Tu te dis que ce n'est pas ton problème et que tu as déjà bien assez à faire de surveiller ton propre repas.",
        score: 0,
        feedback: "Ce repli individualiste assure à Thomas une totale impunité. Le racket secret se nourrit du témoin passif pour grandir et se répéter."
      },
      {
        id: 3,
        text: "Tu te moques et lances à Thomas : 'Régale-toi bien Thomas, il n'avait qu'à pas amener de bons trucs !'.",
        score: -1,
        feedback: "C'est une comportement intolérable qui justifie le racket et déshumanise Lucas. Soutenir un vol fait de toi un complice direct du harceleur."
      }
    ]
  },
  {
    id: 7,
    title: "Les chaussures de sport cachées",
    day: "Mardi - Après-midi",
    location: "Les vestiaires du gymnase",
    situation: "Avant la séance d'athlétisme, Thomas subtilise les chaussures de Lucas et va les enfermer dans le vieux placard à balais en lui disant : 'Si tu parles, je t'écrase'. Lucas, paralysé par la peur des représailles, regarde la porte du placard fermée en pleurant doucement dans son coin.",
    choices: [
      {
        id: 1,
        text: "Tu dis à voix haute : 'Elles sont là, quelqu'un les a jetées dans le placard !' et tu vas l'aider à les récupérer.",
        score: 1,
        feedback: "Superbe courage social ! En prenant la parole publiquement, tu brises le silence pesant imposé par la peur et tu anéantis la tentative d'exclusion de Thomas."
      },
      {
        id: 2,
        text: "Tu enfiles tes propres chaussures rapidement sans rien dire pour aller te ranger dehors en premier.",
        score: 0,
        feedback: "Lucas n'ose pas contredire la menace de Thomas et se retrouve sans baskets, récoltant une punition injuste du prof d'EPS. Ton silence a de lourdes conséquences."
      },
      {
        id: 3,
        text: "Tu aides Thomas à plaquer le balai contre la porte du placard pour bloquer les chaussures encore plus fort.",
        score: -1,
        feedback: "Tu participes activement au sabotage des affaires scolaires d'un camarade. C'est un acte de harcèlement direct condamnable."
      }
    ]
  },
  {
    id: 8,
    title: "La peinture gribouillée",
    day: "Mercredi - Activités artistiques",
    location: "La salle d'arts plastiques",
    situation: "Lucas a passé deux séances à peindre un arbre magnifique pour l'exposition de l'école. En son absence quand il va laver ses pinceaux, Thomas s'approche avec un gros feutre noir brillant et rature sauvagement sa peinture.",
    choices: [
      {
        id: 1,
        text: "Tu appelles immédiatement l'enseignant de dessin pour signaler l'acte odieux de Thomas.",
        score: 1,
        feedback: "Très bien ! Les dégâts matériels gratuits doivent être immédiatement reportés. L'enseignant va pouvoir rassurer Lucas et sanctionner durement Thomas."
      },
      {
        id: 2,
        text: "Tu fronces les sourcils pour montrer ton désaccord mais tu n'oses rien dire à l'enseignant pour ne pas faire d'histoires.",
        score: 0,
        feedback: "Ton silence protège l'acte malveillant de Thomas. Lucas va revenir, voir sa peinture ruinée et penser que personne ne s'intéresse à son travail."
      },
      {
        id: 3,
        text: "Tu encourages Thomas : 'Fais-lui des moustaches sur l'arbre, ça fera un arbre comique !'.",
        score: -1,
        feedback: "Cette incitation à vandaliser le travail d'un camarade montre un manque de respect total pour ses efforts administratifs et artistiques. C'est malveillant."
      }
    ]
  },
  {
    id: 9,
    title: "Le choix des capitaines",
    day: "Jeudi - Matinée d'EPS",
    location: "Le terrain de sport",
    situation: "Les élèves préparent un match de balle assise. Thomas, nommé capitaine d'une équipe, crie : 'Je refuse de prendre Lucas, il est nul, il a deux mains gauches !'. Lucas baisse la tête et s'assoit, résigné, sur le banc de touche.",
    choices: [
      {
        id: 1,
        text: "Tu t'exprimes à voix haute : 'Thomas, on doit tous jouer, c'est l'esprit de la classe. Lucas, viens dans notre équipe !'.",
        score: 1,
        feedback: "Splendide ! Tu as rétabli l'équité sportive et fait preuve de sororité/fraternité. Lucas se sent intégré et valorisé au sein du sport scolaire."
      },
      {
        id: 2,
        text: "Tu te tais et tu attends sagement que ton nom soit appelé par les capitaines pour entrer sur le terrain.",
        score: 0,
        feedback: "Tu évites d'être impliqué émotionnellement, mais Lucas reste excluded, exposé à la honte publique d'être rejeté devant toute sa classe."
      },
      {
        id: 3,
        text: "Tu ris et dis près de Thomas : 'C'est vrai, avec lui dans l'équipe on prend une raclée assurée !'.",
        score: -1,
        feedback: "C'est de la vacherie pure. Utiliser le sport pour discriminer et humilier un camarade contredit toutes les valeurs de l'école."
      }
    ]
  },
  {
    id: 10,
    title: "La caricature qui circule",
    day: "Jeudi - Déjeuner",
    location: "La cantine de l'école",
    situation: "Une feuille glisse sous la table. C'est un dessin méchant représentant Lucas en monstre difforme et plein de boue avec des surnoms humiliants. Plusieurs copains à ta table gloussent en le lisant.",
    choices: [
      {
        id: 1,
        text: "Tu prends le dessin offensant, le déchires ostensiblement en deux et le jettes en disant : 'C'est méchant et stupide'.",
        score: 1,
        feedback: "Formidable acte héroïque ! Briser net la propagation des insultes écrites empêche la diffusion du harcèlement de groupe. Tu es un vrai pilier de solidarité."
      },
      {
        id: 2,
        text: "Tu regardes le dessin pour voir ce que c'est sans rire, puis tu le repasses à ton voisin pour ne pas bloquer le papier.",
        score: 0,
        feedback: "En laissant circuler l'insulte écrite par simple neutralité, tu restes un maillon passif de sa diffusion permanente."
      },
      {
        id: 3,
        text: "Tu rigoles et rajoutes une flèche pointant vers son gros nez avant de faire circuler le papier plus loin.",
        score: -1,
        feedback: "Ajouter ta part d'injure fait de toi un auteur direct de cyber-harcèlement ou harcèlement écrit. Cela blesse Lucas durablement dans son image."
      }
    ]
  },
  {
    id: 11,
    title: "Le jeu de la peste",
    day: "Jeudi - Récréation de l'après-midi",
    location: "La grande cour",
    situation: "Thomas lance un jeu cruel : 'Lucas a attrapé les microbes géants ! Celui qui s'approche à moins d'un mètre perd la vie !'. Plusieurs élèves s'enfuient en ricanant dès que Lucas fait un pas vers eux.",
    choices: [
      {
        id: 1,
        text: "Tu ignores superbement ce jeu idiots et tu vas rejoindre Lucas pour discuter tranquillement de vos cartes de jeux préférées.",
        score: 1,
        feedback: "Génial ! Ton refus résolu d'entrer dans ce jeu cruel détruit le pouvoir d'exclusion sociale de Thomas et restaure la dignité de Lucas."
      },
      {
        id: 2,
        text: "Tu t'éloignes pour ne pas risquer d'être mêlé à un jeu désagréable et te retrouver toi-même exclu.",
        score: 0,
        feedback: "La peur t'a dicté de fuir, laissant Lucas isolé au centre d'un cercle d'évitement humiliant. Être témoin demande d'oser outrepasser sa peur."
      },
      {
        id: 3,
        text: "Tu cries 'Alerte nucléaire, il s'approche !' en fuyant de manière théâtrale à l'autre bout de la cour.",
        score: -1,
        feedback: "C'est de la pure stigmatisation publique. Tu as donné une importance dévastatrice à cette rumeur, brisant le cœur de Lucas."
      }
    ]
  },
  {
    id: 12,
    title: "La bousculade dans l'escalier",
    day: "Vendredi - Entrée de classe",
    location: "L'escalier principal",
    situation: "Alors que les élèves montent s'installer, Thomas double Lucas en le bousculant violemment de l'épaule contre la rampe de fer. Lucas perd l'équilibre et s'accroche in extremis pour éviter une chute dans les marches.",
    choices: [
      {
        id: 1,
        text: "Tu dis fort à Thomas : 'Fais attention Thomas ! C'est super dangereux, il aurait pu se faire très mal !' et tu soutiens Lucas.",
        score: 1,
        feedback: "Bravo ! La sécurité physique de tes camarades est essentielle. Rappeler les dangers immédiats face aux gestes violents montre un sens des responsabilités."
      },
      {
        id: 2,
        text: "Tu passes vite à côté sans t'arrêter pour entrer en classe avant que la maîtresse ne compte les retards.",
        score: 0,
        feedback: "En ignorant des bousculades physiques dangereuses, on tolère que l'école devienne un lieu où régnerait la force physique brute."
      },
      {
        id: 3,
        text: "Tu dis tout haut : 'Il va finir par s'envoler celui-là si on l'aide un peu !' en souriant.",
        score: -1,
        feedback: "Encourager ou plaisanter sur un geste de bousculade dangereuse est irresponsable. Tu as minimisé un vrai danger physique."
      }
    ]
  },
  {
    id: 13,
    title: "Le cartable dans la flaque d'eau",
    day: "Vendredi - Récréation du midi",
    location: "Sous le préau pluvieux",
    situation: "Il pleut énormément. Durant une altercation, Thomas arrache le sac d'école de Lucas et l'expédie d'un coup de pied au milieu de la cour exposée à l'averse, dans une flaque de boue. Les cahiers de Lucas prennent l'eau.",
    choices: [
      {
        id: 1,
        text: "Tu cours récupérer le sac sous la pluie, tu aides Lucas à éponger ses cahiers et vous allez voir la directrice.",
        score: 1,
        feedback: "Formidable dévouement ! Tu as protégé son matériel précieux de classe et tu l'as aidé à se faire entendre auprès d'un adulte protecteur."
      },
      {
        id: 2,
        text: "Tu restes au sec sous le préau, en te disant silencieusement que Thomas dépasse vraiment toutes les bornes aujourd'hui.",
        score: 0,
        feedback: "Se ranger du côté du bien en pensée ne suffit malheureusement pas à extraire Lucas de sa détresse face à ses cahiers trempés."
      },
      {
        id: 3,
        text: "Tu ris bruyamment et qualifies le geste de Thomas de 'joli tir à trois points !'.",
        score: -1,
        feedback: "Valoriser et encourager la destruction du matériel scolaire d'autrui est un manque absolu de sens commun et de fraternité scolaire."
      }
    ]
  },
  {
    id: 14,
    title: "L'intimidation au portail",
    day: "Vendredi - Sortie de l'école",
    location: "Devant le portail extérieur",
    situation: "La cloche a sonné, c'est le week-end. Mais juste à l'extérieur des limites de l'école, Thomas et ses deux acolytes entourent Lucas sur le trottoir pour l'intimider loin du regard vigilant des enseignants.",
    choices: [
      {
        id: 1,
        text: "Tu vas voir Lucas et le prends par l'épaule et tu dis : 'Viens, mes parents nous attendent, on fait le bout de chemin ensemble !'.",
        score: 1,
        feedback: "Merveilleux ! En faisant bloc avec Lucas au-delà du portail, tu as dissuadé le groupe d'agresser Lucas en dehors de l'école."
      },
      {
        id: 2,
        text: "Tu traverses vite le trottoir car le bus arrive bientôt et tu te dis que l'école est officiellement fermée.",
        score: 0,
        feedback: "Le harcèlement ne s'arrête pourtant pas aux horaires d'ouverture de l'école. En le laissant seul, il subit l'angoisse du retour."
      },
      {
        id: 3,
        text: "Tu cries en passant : 'Hé Lucas, prépare-toi à courir vite si tu veux rentrer sain et sauf !' avec un clin d’œil à Thomas.",
        score: -1,
        feedback: "En soufflant sur les braises d'une confrontation extérieure, tu exposes Lucas à un climat d'insécurité insoutenable pour son week-end."
      }
    ]
  },
  {
    id: 15,
    title: "La boule au ventre du lundi",
    day: "Lundi - Deuxième semaine",
    location: "Le hall d'accueil",
    situation: "Le week-end est passé. Tu découvres Lucas assis de grand matin sur une marche du hall, prostré, sa tête dans ses poignets. Il refuse d'entrer en classe et confie à voix basse qu'il a d'affreuses douleurs d'estomac tant il est angoissé.",
    choices: [
      {
        id: 1,
        text: "Tu t'assois à côté de lui, tu l'écoutes, et l'invites à aller à l'infirmerie d'un ton chaleureux ensemble.",
        score: 1,
        feedback: "Quelle bienveillance salutaire ! L'anxiété scolaire provoque de vrais maux physiques. Orienter ton camarade vers l'infirmerie est idéal."
      },
      {
        id: 2,
        text: "Tu lui lances : 'Courage Lucas, faut pas rater le cours d'histoire !' avant de gravir les marches à toute allure.",
        score: 0,
        feedback: "Ton intention était rassurante, mais elle passe à côté de sa détresse profonde. Une simple phrase rapide ne suffit pas face à sa détresse physique."
      },
      {
        id: 3,
        text: "Tu t'agaces : 'Arrête d'inventer des comédies à chaque fois que tu veux éviter une évaluation !'.",
        score: -1,
        feedback: "C'est invalider la douleur sincère d'un camarade torturé psychologiquement. Accuser une victime de simuler aggrave son isolement."
      }
    ]
  },
  {
    id: 16,
    title: "Le chantage de la casquette",
    day: "Lundi - Pause de midi",
    location: "Près des grands arbres",
    situation: "Thomas a attrapé la casquette préférée de Lucas et la brandit très haut. Il exige que Lucas rédige tout son exercice de géographie pour demain en échange de son bien. Lucas le supplie très fort en tendant les bras.",
    choices: [
      {
        id: 1,
        text: "Tu t'interposes fermement : 'Thomas, rends-lui sa casquette maintenant. Lucas, viens, on va le signaler au surveillant'.",
        score: 1,
        feedback: "Parfaite médiation ! Tu t'opposes cordialement mais sérieusement au racket de chantage et tu proposes de faire appel aux règles de vie scolaires."
      },
      {
        id: 2,
        text: "Tu penses que tricher est malhonnête, mais tu te dis que c'est l'histoire de Lucas après tout.",
        score: 0,
        feedback: "Fermer les yeux devant un chantage contraint la victime à contourner les règles scolaires par pure peur d'agression. Ta voix aurait changé la donne."
      },
      {
        id: 3,
        text: "Tu ris et dis à Lucas : 'Dépêche-toi de bien utiliser ta carte d'Europe si tu veux retrouver ta casquette !'.",
        score: -1,
        feedback: "C'est cautionner le vol et encourager un sentiment d'asservissement d'un élève par un autre. C'est inacceptable à l'école."
      }
    ]
  },
  {
    id: 17,
    title: "L'interrogation individuelle",
    day: "Lundi - Fin d'après-midi",
    location: "Le bureau de la maîtresse",
    situation: "La maîtresse s'alarme du comportement triste de Lucas. Elle convoque plusieurs élèves de CM2 un à un pour un entretien à huis clos. À ton tour, elle te regarde avec attention : 'Est-ce que Lucas subit des violences de la part de Thomas ?'",
    choices: [
      {
        id: 1,
        text: "Tu lui relates courageusement toute la vérité : les cartables mouillés, le goûter volé et l'intimidation par Thomas.",
        score: 1,
        feedback: "Bravo ! C'est le geste d'assistance le plus précieux d'un citoyen solidaire. Apporter ton témoignage permet aux adultes d'agir officiellement."
      },
      {
        id: 2,
        text: "Tu t'inquiètes d'être étiqueté 'balance' et réponds : 'Je ne sais pas trop, Lucas est juste très discret en classe'.",
        score: 0,
        feedback: "C'est normal d'avoir peur, mais en taisant l'agresseur, le harcèlement continuera faute de preuves réelles. Parler à son enseignant protège."
      },
      {
        id: 3,
        text: "Tu réponds fermement : 'Lucas cherche juste les ennuis et nous embête tous avec ses jérémiades perpétuelles'.",
        score: -1,
        feedback: "C'est trahir la vérité et envelopper la victime sous d'injustes critiques. Tu as choisi d'alimenter directement la défense du harceleur."
      }
    ]
  },
  {
    id: 18,
    title: "La promesse de garder le secret",
    day: "Mardi - Vestiaire du gymnase",
    location: "Le complexe sportif",
    situation: "Lucas t'avoue à mi-voix qu'il souffre énormément mais qu'il refuse que ses parents l'apprennent de peur de passer pour faible ou de les stresser. Il te supplie de jurer de garder le silence sur tout.",
    choices: [
      {
        id: 1,
        text: "Tu refuses ce secret : 'Je ne peux pas te promettre ça Lucas, c'est trop grave. Il faut absolument que tes parents t'aident'.",
        score: 1,
        feedback: "D'une immense lucidité ! Un secret de danger ou de détresse ne doit jamais être gardé caché. Briser le secret sauve des vies scolaires."
      },
      {
        id: 2,
        text: "Tu lui donnes ta parole de garder le secret en espérant secrètement que tout s'arrangera tout seul avec le temps.",
        score: 0,
        feedback: "Emballer Lucas dans un pacte d'omerta l'enferme dans son cauchemar. Le harcèlement ne s'arrête jamais par magie sans bruit."
      },
      {
        id: 3,
        text: "Tu lui lances : 'Tu as bien raison de te cacher, tes parents auraient trop honte d'avoir un fils aussi peureux !'.",
        score: -1,
        feedback: "Cette remarque brutale et destructrice foudroie les derniers espoirs de Lucas. Tu l'as poussé un peu plus bas dans l'angoisse."
      }
    ]
  },
  {
    id: 19,
    title: "Le piège de l'ombre de la cour",
    day: "Mardi - Récréation du matin",
    location: "Derrière les poubelles du préau",
    situation: "Thomas a entraîné de force Lucas dans un recoin à l'abri du regard des surveillants. Il le bloque violemment contre le mur du gymnase, brandissant son poing pour qu'il n'ose plus jamais parler à la maîtresse.",
    choices: [
      {
        id: 1,
        text: "Tu cours en trombe chercher l'instituteur de service au centre de la cour et tu le guides directement au préau.",
        score: 1,
        feedback: "Superbe et prompte intervention ! Amener l'adulte face au fait accompli d'une agression physique met fin définitivement au climat d'impunité."
      },
      {
        id: 2,
        text: "Tu t'attroupes avec quelques camarades et tu observes de loin la confrontation en chuchotant.",
        score: 0,
        feedback: "Être un spectateur passif alimente la meute. Le harceleur se sent fort du silence de son public immobile. Tu devais alerter."
      },
      {
        id: 3,
        text: "Tu acceptes spontanément de faire le guet à l'angle du bâtiment pour alerter Thomas si un enseignant approche.",
        score: -1,
        feedback: "C'est de la complicité gravissime. Protéger l'agresseur en neutralisant la surveillance adulte est punissable d'un conseil de discipline."
      }
    ]
  },
  {
    id: 20,
    title: "La discussion citoyenne",
    day: "Mardi - Fin d'après-midi",
    location: "La salle de classe",
    situation: "La directrice et la maîtresse ont réuni la classe de CM2 en cercle. Elles ouvrent un débat sur l'entraide et le harcèlement scolaire : 'Quel est le rôle d'un témoin de harcèlement ? Pourquoi doit-il parler ?'",
    choices: [
      {
        id: 1,
        text: "Tu lèves la main haut : 'Un témoin parle pour aider, ce n'est pas cafarder. On est responsables du bien-être de notre classe !'.",
        score: 1,
        feedback: "Bravo, c'est l'essence même de l'esprit citoyen ! Ton témoignage public et percutant aide toute la classe à comprendre de quel côté se ranger."
      },
      {
        id: 2,
        text: "Tu dessines silencieusement sur ton cahier de brouillon en attendant que l'heure passe pour rentrer chez toi.",
        score: 0,
        feedback: "Tu n'as pas osé t'impliquer publiquement. C'est regrettable de ne pas soutenir les messages essentiels de la directrice devant tout le monde."
      },
      {
        id: 3,
        text: "Tu murmures en ricanant à tes voisins : 'Toutes ces blabla inutiles juste parce que Lucas adore faire sa pleurnicheuse devant les profs'.",
        score: -1,
        feedback: "Accuser Lucas face à la classe perpétue une mentalité dangereuse. C'est l'attitude coupable qui légitime et fait perdurer le harcèlement scolaire."
      }
    ]
  }
];
