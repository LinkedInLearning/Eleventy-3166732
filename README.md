# Eleventy Lernen

Dies ist das Repository für den **LinkedIn Learning** Kurs `Eleventy Lernen`. Den gesamten Kurs finden Sie auf [LinkedIn Learning][lil-course-url].

![COURSENAME][lil-thumbnail-url] 

Statische Site-Generatoren haben einen großen Vorteil gegenüber dynamisch erstellten Seiten - die gute Performance. Mit Eleventy lernen Sie in diesem LinkedIn Learning-Kurs einen Vertreter kennen, der, wie Sie sehen, sich ungeheuer flexibel erweist: Er arbeitet mit vielen Template-Sprachen zusammen, Sie müssen keinen Boilerplate-Code schreiben, nicht mal eine Konfigurationsdatei ist notwendig. Sie lernen die wichtigsten Grundlagen kennen, erfahren, was hinter zentralen Konzepten wie Collections oder Pagination steckt und fügen schließlich alles in einem kleinen Praxisprojekt zusammen. Anhand von Code-Challenges am Ende jeden Kapitels können Sie das Erlernte sofort testen und Ihre Lösung auch gleich mit der von Ihrer Trainerin angebotenen Solution vergleichen.

## Anleitung

Dieses Repository hat Branches für ausgewählte Videos im Kurs. Verwenden Sie das Ausklappmenü "Branch: ..." in GitHub um zwischen den unterschiedlichen Branches hin und her zu wechseln bzw. um bei einem spezifischen Status einzusteigen. Oder Sie fügen `/tree/BRANCH_NAME` der URL hinzu um direkt in den gewünschten Branch zu wechseln.

## Branches

Die Git Branches sind passend zu den Videos im Kurs strukturiert. Die Namenskonvention lautet `Kapitel#_Video#`. Der Branch `04_02` beinhaltet zum Beispiel die Dateien für das zweite Video im vierten Kapitel. 


Wenn Sie von einem Branch nach Änderungen zum nächsten Branch wechseln, erhalten Sie möglicherweise die folgende Meldung:

```
error: Your local changes to the following files would be overwritten by checkout:        [files]
Please commit your changes or stash them before you switch branches.
Aborting
```

Dieses Problem lösen Sie wie folgt:
    Add changes to git using this command: git add .
    Commit changes using this command: git commit -m "some message"

## Installation

1. Um diese Übungsdateien nutzen zu können, müssen Sie Folgendes installiert haben:
   - [Node.JS](https://nodejs.org/en/)
2. Klonen Sie das Repository in Ihre lokale Maschine unter Verwendung von terminal (Mac), CMD (Windows) oder ein anderes Werkzeug mit grafischer Bedienoberfläche wie SourceTree.
3. Wechseln Sie dann in das Verzeichnis.
4. Geben Sie ein `npm install`.
5. Wenn alles installiert ist, können Sie mit `npx @11ty/eleventy --serve` Eleventy mit dem integrierten Server starten.
6. Den Server stoppen Sie über Ctrl + C.
7. Sie können sich natürlich auch nur ausgewählte Dateien/Ordner holen. 

### Autor

**Florence Maurice**

_Trainerin und Autorin für Webthemen_

Sehen Sie sich andere Kurse des Autors auf [LinkedIn Learning](https://www.linkedin.com/learning/instructors/florence-maurice) an.

[0]: # (Replace these placeholder URLs with actual course URLs)
[lil-course-url]: https://www.linkedin.com/learning/building-a-graphql-project-with-react-js
[lil-thumbnail-url]: https://cdn.lynda.com/course/3166732/3166732-1651734067255-16x9.jpg
