// Hash the array and compare the arrays!
// Key
// a = small apple .small
// A = apple
// o = small orange, .small
// O = orange
// p = small pickle, .small
// P = pickle
// () = plate open / close
// {} = fancy plate open / close
// [] = bento open close tags

strings['fr'] = {
    'table': 'table',
    'apple': 'pomme',
    'orange': 'orange',
    'pickle': 'cornichon',
    'plate': 'assiette',
    'bento': 'bento',
    'fancy': 'chic',
    'small': 'petit',

    /* ui */
    "Level {0} of {1}": 'Niveau {0} sur {1}',
    'str1': "Pas d'inquiétude, vous pouvez le faire !",
    'str2': "Vous allez découvrir les sélecteurs CSS !\nLes sélecteurs servent à sélectionner les éléments auxquels on veut appliquer un style.",
    'str3': "Exemple 1 - Une Règle CSS",
    'str4': 'Ici, le "p" est le sélecteur (sélectionne tous les éléments HTML &lt;p&gt;) et applique le style "margin-bottom".',
    'str5': "Pour jouer, écrivez un sélecteur CSS dans l'éditeur ci-dessous pour sélectionner les bons objets sur la table. Si votre sélection est correcte, vous avancerez au niveau suivant.",
    'str6': "Passez la souris sur les objets sur la table pour voir leurs codes HTML.",
    'str7': "Une aide sur les sélecteurs vous est fournie sur la droite ! &rarr;",
    'str8': "J'ai compris !",
    'str9': "À l'aide je suis coincé !",
    'str10': "Éditeur CSS <div class='file-name'>style.css</div>",
    'str11': "Entrez un sélecteur CSS",
    'str12': "entrée",
    'str13': "{<br/>/* Les styles seraient ici */<br/>}",
    'str14': '<br/>/* <br/>Entrez un nombre pour sauter directement à un niveau suivant.<br/>Ex &rarr; "5" pour le niveau 5 <br/>*/',
    'str15': "<div class='file-name'>table.html</div> Lecteur HTML",
    'str16': "À Propos",
    'str17': "Ceci est un jeu pour vous aider à apprendre les sélecteurs CSS. Entrez le bon sélecteur pour terminer chaque niveau. Une aide vous est fournie sur la droite.",
}

levels['fr'] = [
    {
        helpTitle: "Sélectionner les éléments selon leur type",
        selectorName: "Sélecteur de type",
        doThis: "Sélectionnez les assiettes",
        selector: "plate",
        syntax: "A",
        help: "Sélectionne tous les éléments de type <strong>A</strong>. Le type désigne le type de balise, par exemple <tag>div</tag>, <tag>p</tag>, <tag>ul</tag>, etc.",
        examples: [
            '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
            '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
        ],
        board: "()()"
    },
    {
        doThis: "Sélectionnez les bentos",
        selector: "bento",
        syntax: "A",
        helpTitle: "Sélectionner les éléments selon leur type",
        selectorName: "Sélecteur de type",
        help: "Sélectionne tous les éléments de type <strong>A</strong>. Le type désigne le type de balise, par exemple <tag>div</tag>, <tag>p</tag>, <tag>ul</tag>, etc.",
        examples: [
            '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
            '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
        ],
        board: "[]()[]"
    },
    {
        doThis: "Sélectionnez l'assiette chic",
        selector: "#fancy",
        selectorName: "Sélecteur d'identifiant",
        helpTitle: "Sélectionner les éléments selon leur identifiant (ID)",
        syntax: "#ID",
        help: 'Sélectionne l\'élément ayant l\'attribut <strong>id</strong> valant <strong>ID</strong>. Il est possible de combiner un sélecteur d\'identifiant et un sélecteur de type.',
        examples: [
            '<strong>#cool</strong> sélectionne tout élément ayant <strong>id="cool"</strong>',
            '<strong>ul#long</strong> sélectionne les éléments <strong>&lt;ul id="long"&gt;</strong>'
        ],
        board: "{}()[]"
    },
    {
        helpTitle: "Sélectionner un élément contenu dans un autre élément",
        selectorName: "Sélecteur de descendant",
        doThis: "Sélectionnez la pomme dans l'assiette",
        selector: "plate apple",
        syntax: "A&nbsp;&nbsp;B",

        help: "Sélectionne tous les <strong>B</strong> à l'intérieur d'éléments <strong>A</strong>. Ici, <strong>B</strong> est le descendant de A, c'est-à-dire un élément à l'intérieur de A.",
        examples: [
            '<strong>p&nbsp;&nbsp;strong</strong> sélectionne tout élément <strong>&lt;strong&gt;</strong> qui est descendant d\'un élément<strong>&lt;p&gt;</strong>',
            '<strong>#fancy&nbsp;&nbsp;span</strong> sélectionne tout élément <strong>&lt;span&gt;</strong> qui est descendant d\'un élément ayant l\'attribut <strong>id="fancy"</strong>',
        ],
        board: "[](A)A"
    },
    {
        doThis: "Sélectionnez le cornichon sur l'assiette chic",
        selector: "#fancy pickle",
        helpTitle: "Combiner les sélecteurs d'identifiant et de descendant",
        syntax: "#ID&nbsp;&nbsp;A",
        help: 'Le sélecteur de descendant peut être combiner avec les autres sélecteurs.',
        examples: [
            '<strong>#cool&nbsp;span</strong> sélectionne tous les éléments <strong>&lt;span&gt;</strong> qui sont à l\'intérieur d\' éléments avec <strong>id="cool"</strong>'
        ],
        board: "[O]{P}(P)"
    },
    {
        doThis: "Sélectionnez les petites pommes",
        selector: ".small",
        selectorName: "Sélecteur de classe",
        helpTitle: "Sélectionner les éléments en fonction de leur classe",

        syntax: ".nomdeclasse",
        help: 'Le sélecteur de classe sélectionne tous les éléments ayant en attribut la classe donnée. Les éléments peuvent avoir un seul identifiant mais plusieurs classes.',
        examples: [
            '<strong>.genial</strong> sélectionne tous les éléments avec <strong>class="genial"</strong>'
        ],

        board: "Aa(a)()"
    },
    {
        doThis: "Sélectionnez les petites oranges",
        selector: "orange.small",
        helpTitle: "Combiner les sélecteurs de type et de classe",
        syntax: "A.nomdeclasse",
        help: 'On peut combiner le sélecteur de classe avec les autres sélecteurs, comme le sélecteur de type.',
        examples: [
            '<strong>ul.important</strong> sélectionne tous les éléments <strong>&lt;ul&gt;</strong> qui ont <strong>class="important"</strong>',
            '<strong>#grand.large</strong> sélectionne tous les éléments avec <strong>id="grand"</strong> qui ont aussi <strong>class="large"</strong>'
        ],
        board: "Aa[o](O)(o)"
    },
    {
        doThis: "Sélectionnez les petites oranges qui sont dans des bentos",
        selector: "bento orange.small",
        syntax: "Donnez tout ce que vous avez !",
        helpTitle: "Vous pouvez le faire...",
        help: 'Combinez tout ce que vous avez appris jusque là pour résoudre ce niveau !',
        board: "A(o)[o][a][o]"
    },
    {
        doThis: "Sélectionnez toutes les assiettes et bentos",

        selector: "plate,bento",
        selectorName: "L'opérateur de combinaison",
        helpTitle: "Combiner, des sélecteurs, avec.. des virgules !",
        syntax: "A, B",
        help: "Grâce à la technologie Shatner, on peut sélectionner tous les éléments <strong>A</strong> et <strong>B</strong>. Il est possible de combiner n'importe quel nombre de sélecteurs avec plusieurs virgules.",
        examples: [
            '<strong>p, .amusant</strong> sélectionne tous les éléments <tag>p</tag> ainsi que tous les éléments qui ont  <strong>class="amusant"</strong>',
            '<strong>a, p, div</strong> sélectionne tous les éléments <tag>a</tag>, <tag>p</tag> et <tag>div</tag>'
        ],
        board: "pP(P)[P](P)Pp"
    },
    {
        doThis: "Sélectionnez tout !",
        selector: "*",
        selectorName: "Le Sélecteur Universel",
        helpTitle: "Tout sélectionner !",
        syntax: "*",
        help: 'Vous pouvez sélectionner tous les éléments avec le sélecteur universel ! ',
        examples: [
            "<strong>p *</strong> sélectionne tous les éléments à l'intérieur des éléments <tag>p</tag>."
        ],
        board: "A(o)[][O]{)"
    },
    {
        doThis: "Sélectionnez tout ce qui se trouve sur une assiette",
        selector: "plate *",
        syntax: "A&nbsp;&nbsp;*",
        helpTitle: "Combiner avec le sélecteur universel",
        help: "Sélectionner tous les éléments à l'intérieur d'éléments <strong>A</strong>.",
        examples: [
            "<strong>p *</strong> sélectionne tous les éléments à l'intérieur des éléments strong>&lt;p&gt;</strong>.",
            "<strong>ul.chic *</strong> sélectionne tous les éléments à l'intérieur des éléments <strong>&lt;ul class=\"chic\"&gt;</strong>."
        ],
        board: "{o}(P)a(A)"
    },
    {
        doThis: "Sélectionnez toutes les pommes qui sont à côté d'une assiette",
        selector: "plate + apple",
        helpTitle: "Sélectionner un élément qui suit directement un autre élément",
        selectorName: "Sélecteur de frère adjacent",
        syntax: "A + B",
        help: "Sélectionne tous les éléments qui suivent directement des éléments <strong>A</strong>. Des éléments qui se suivent sont appelés des frères. Ils sont sur le même niveau, ou profondeur. <br/><br/>Dans le code HTML de ce niveau, les éléments ayant le même niveau d'indentation (les espaces en début de ligne) sont des frères.",
        examples: [
            '<strong>p + .intro</strong> sélectionne tous les éléments avec <strong>class="intro"</strong> qui suivent directement un élément <tag>p</tag>.',
            '<strong>div + a</strong> sélectionne tous les éléments <tag>a</tag> qui suivent directement un élément <tag>div</tag>.'
        ],
        board: "[a]()a()Aaa"
    },
    {
        selectorName: "Sélecteur des frères successeurs",
        helpTitle: "Sélectionner tous les éléments qui suivent un autre élément",
        syntax: "A ~ B",
        doThis: "Sélectionnez tous les cornichons à droite du bento",
        selector: "bento ~ pickle",
        help: "Sélectionne tous les frères d'un élément qui le suivent. Il s'agit d'un sélecteur similaire au sélecteur de frère adjacent (A + B) sauf qu'on sélectionne tous les frères qui le suivent au lieu du premier.",
        examples: [
            '<strong>A ~ B</strong> sélectionne tous les éléments <strong>B</strong> qui suivent un élément <strong>A</strong>.'
        ],
        board: "P[o]pP(P)(p)"
    },
    {
        selectorName: "Sélecteur d'enfant",
        syntax: "A > B&nbsp;",
        doThis: "Sélectionnez la pomme qui est directement sur une assiette",
        selector: "plate > apple",
        helpTitle: "Sélectionner les enfants d'un élément",
        help: "Sélectionne tous les éléments qui sont des enfants d'autres éléments. Un enfant est un élément qui apparaît directement à l'intérieur d'un autre.",
        examples: [
            "<strong>A > B</strong> sélectionne tous les éléments <strong>B</strong> qui sont descendants directs d'un élément <strong>A</strong>."
        ],
        board: "([A])(A)()Aa"
    },
    {
        selectorName: "Pseudo-sélecteur du premier enfant",
        helpTitle: "Sélectionner le premier élément enfant d'un autre",
        doThis: "Selectionnez l'orange au dessus de la pile",
        selector: "plate :first-child",
        syntax: ":first-child",

        help: "Sélectionne les éléments qui sont le premier enfant de leur parent. Il est possible de combiner ce pseudo-sélecteur avec d'autres sélecteurs.",
        examples: [
            '<strong>:first-child</strong> sélectionne tous les éléments qui sont premiers enfants de leur parent.',
            "<strong>p:first-child</strong> sélectionne tous les premiers enfants de type <tag>p</tag>.",
            "<strong>div p:first-child</strong> sélectionne tous les premiers enfants de type <tag>p</tag> qui sont descendants d'un élément <tag>div</tag>."
        ],
        board: "[]()(OOO)p"
    },
    {
        selectorName: "Pseudo-sélecteur d'enfant unique",
        helpTitle: "Sélectionner un élément qui est l'unique enfant d'un autre élément.",
        doThis: "Sélectionnez les aliments qui sont seuls sur une assiette",
        selector: "plate :only-child",
        syntax: ":only-child",
        help: "Sélectionne les éléments qui sont les seuls enfants de leurs parents.",
        examples: [
            '<strong>span:only-child</strong> sélectionne les éléments <tag>span</tag> qui sont enfants uniques.',
            "<strong>ul li:only-child</strong> sélectionne les éléments <tag>li</tag> qui sont enfants uniques à l'intérieur d'un élément <tag>ul</tag>."
        ],
        board: "(A)(p)[]P(oO)p"
    },
    {
        selectorName: "Pseudo-sélecteur de dernier enfant",
        helpTitle: "Sélectionner le dernier enfant d'un autre élément",
        doThis: "Sélectionnez la petite pomme et le cornichon",
        selector: ".small:last-child",
        syntax: ":last-child",
        help: "Sélectionne le dernier enfant d'un élément. <br><br>Conseil de pro &rarr; si un élément est enfant unique, il compte à la fois comme premier et dernier enfant !",
        examples: [
            '<strong>:last-child</strong> sélectionne tous les éléments qui sont derniers enfants de leur parent.',
            "<strong>span:last-child</strong> sélectionne tous les derniers enfants de type <tag>span</tag>.",
            "<strong>ul li:last-child</strong> sélectionne tous les derniers enfants <tag>li</tag> qui sont descendants d'éléments <tag>ul</tag>."
        ],
        board: "{a)()(oO)p"
    },
    {
        selectorName: "Pseudo-sélecteur du n-ième enfant",
        helpTitle: "Sélectionner un élément selon son placement dans un autre élément",
        doThis: "Sélectionnez la 3e assiette",
        selector: ":nth-child(3)",
        syntax: ":nth-child(A)",

        help: "Sélectionne le n-ième (1e, 3e, 12e, etc.) élément enfant d'un autre élément.",
        examples: [
            "<strong>:nth-child(8)</strong> sélectionne tous les éléments qui sont 8e enfant d'un autre élément.",
            '<strong>div p:nth-child(2)</strong> sélectionne tous les deuxièmes enfants <tag>p</tag> dans des <tag>div</tag>.',
        ],
        board: "()()(){}"
    },
    {
        selectorName: "Pseudo-sélecteur du n-ième dernier enfant",
        helpTitle: "Sélectionner un élément selon son placement dans un autre élément, en comptant depuis le dernier enfant",
        doThis: "Sélectionnez le premier bento",
        selector: "bento:nth-last-child(4)",
        syntax: ":nth-last-child(A)",
        help: "Sélectionne les n-ième enfants en comptant depuis le dernier enfant.",
        examples: [
            '<strong>:nth-last-child(2)</strong> sélectionne tous les éléments qui sont avant-dernier enfants de leurs parents.'
        ],
        board: "()[]a(OOO)[]"
    },
    {
        selectorName: "Pseudo-sélecteur du premier enfant d'un type",
        helpTitle: "Sélectionner le premier enfant d'un type donné",
        doThis: "Sélectionnez la première pomme",
        selector: "apple:first-of-type",
        syntax: ":first-of-type",
        help: "Sélectionne le premier enfant d'un type donné d'un élément.",
        examples: [
            "<strong>span:first-of-type</strong> sélectionne le premier élément <tag>span</tag> à l'intérieur de n'importe quel élément."
        ],
        board: "Aaaa(oO)"
    },
    {
        selectorName: "Pseudo-sélecteur du n-ième enfant d'un type",
        helpTitle: "Sélectionner le n-ième enfant d'un type donné",
        doThis: "Sélectionnez les assiettes paires",
        selector: "plate:nth-of-type(even)",
        syntax: ":nth-of-type(A)",
        help: "Sélectionne un élément en fonction de son placement parmi des enfants du type donné - ou les éléments paires ou impaires de ce type.",
        examples: [
            "<strong>div:nth-of-type(2)</strong> sélectionne les deuxièmes éléments <tag>div</tag> parmi les enfants de n'importe quel élément.",
            '<strong>.exemple:nth-of-type(odd)</strong> sélectionne tous les éléments impairs qui ont <strong>class="exemple"</strong>.'
        ],
        board: "()()()(){}()"
    },
    {
        selectorName: "Pseudo-sélecteur du n-ième enfant d'un type avec formule",
        helpTitle: "Sélectionner les enfants d'un type donné avec formule",
        doThis: "Sélectionnez une assiette sur deux, en commençant de la troisième assiette.",
        selector: "plate:nth-of-type(2n+3)",
        syntax: ":nth-of-type(An+B)",
        help: "Sélectionne un élément tous les n éléments, en commençant à partir d'un élément d'un certain rang.",
        examples: [
            '<strong>span:nth-of-type(6n+2)</strong> sélectionne un élément <tag>span</tag> tous les 6, en commençant à partir du deuxième élément <tag>span</tag>.'
        ],
        board: "()(p)(a)()(A)()"
    },

    {
        selectorName: "Sélecteur du seul élément d'un type",
        helpTitle: "Sélectionner les éléments qui n'ont pas de frères du même type",
        selector: "apple:only-of-type",
        syntax: ":only-of-type",
        doThis: "Sélectionnez la pomme sur l'assiette du milieu.",
        help: "Sélectionne le seul élément d'un type à l'intérieur d'un autre élément.",
        examples: [
            "<strong>p span:only-of-type</strong> sélectionne un élément <tag>span</tag> à l'intérieur d'un élément <tag>p</tag> à condition que celui-ci soit le seul élément <tag>span</tag> dans l'élément <tag>p</tag>."
        ],
        board: "(aA)(a)(p)"
    },

    {
        selectorName: "Sélecteur du dernier enfant d'un type",
        helpTitle: "Sélectionner le dernier enfant d'un type donné",
        doThis: "Sélectionnez la deuxième pomme et la deuxième orange",
        selector: ".small:last-of-type",
        syntax: ":last-of-type",
        help: "Sélectionne les éléments qui sont les derniers de ce type à l'intérieur d'un autre élément. Rappel : le type d'un élément désigne le nom de sa balise (<tag>p</tag>, <tag>span</tag>, etc.). <br><br> Je me demande si c'est comme ça que le dernier dinosaure a été sélectionné avant leurs extinction.",
        examples: [
            "<strong>div:last-of-type</strong> sélectionne le dernier élément <tag>div</tag> dans n'importe quel autre élément.",
            '<strong>p span:last-of-type</strong> sélectionne le dernier élément <tag>span</tag> dans chaque élément <tag>p</tag>.'
        ],
        board: "ooPPaa"
    },
    {
        selectorName: "Sélecteur d'élément creux",
        helpTitle: "Sélectionner les éléments qui n'ont pas d'enfant",
        doThis: "Sélectionnez les bentos vides",
        selector: "bento:empty",
        syntax: ":empty",
        help: "Sélectionne les éléments qui n'ont pas d'enfant.",
        examples: [
            '<strong>div:empty</strong> sélectionne tous les éléments <tag>div</tag> sans enfant.'
        ],
        board: "[][p][][]"
    },
    {
        selectorName: "Pseudo-classe de négation",
        helpTitle: "Sélectionner tous les éléments qui ne sont pas sélectionnés par un sélecteur",

        doThis: "Sélectionnez les grosses pommes",
        selector: "apple:not(.small)",
        syntax: ":not(X)",
        help: 'Sélectionne les éléments qui ne sont pas sélectionnés par le sélecteur <strong>"X"</strong>.',
        examples: [
            "<strong>:not(#chic)</strong> sélectionne tous les éléments qui n'ont pas <strong>id=\"chic\"</strong>.",
            '<strong>div:not(:first-child)</strong> sélectionne tous les éléments <tag>div</tag> qui ne sont pas premier enfant.',
            "<strong>:not(.gros, .moyen)</strong> sélectionne tous les éléments qui n'ont pas <strong>class=\"gros\"</strong> ou <strong>class=\"moyen\"</strong>"
        ],
        board: "{a}(A)A(o)p"
    }
];
