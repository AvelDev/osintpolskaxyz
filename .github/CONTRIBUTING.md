# Poradnik Współpracy

Tutaj znajdziesz ogólne wytyczne dla osób, które chciałyby zacząć współtworzyć projekt OSINT Polska. Można to robić na kilka sposobów:

- [Zgłaszanie nowych narzędzi](#zgłaszanie-narzędzi)
- [Zgłaszanie błędów w istniejących wpisach](#zgłaszanie-błędów)
- [Edycja i podgląd zmian](#wprowadzanie-zmian)

## Zgłaszanie Narzędzi

> [!INFO] NOTATKA
> W przypadku większych zmian w wiki, takich jak restrukturyzacja strony lub sekcji, prosimy o wcześniejsze założenie [Issue na GitHubie](https://github.com/AvelDev/osintpolskaxyz/issues) w celu omówienia pomysłu.

**Prosimy nie zgłaszać następujących elementów:**

- **🚫 Niedziałające linki** - Zanim coś dodasz, upewnij się, że strona działa.
- **🌍 Oprogramowanie niezwiązane z OSINT** - Skupiamy się wyłącznie na narzędziach do pozyskiwania informacji z jawnych źródeł.

### Dodawanie Strony

Aby zgłosić nowy link, wykonaj poniższe kroki:

- Upewnij się, że narzędzia nie ma jeszcze w naszej bazie. Możesz to sprawdzić, przeszukując projekt (`Ctrl + F`).
- Nie wysyłaj wielu nietestowanych linków naraz. Przesyłaj tylko to, co uważasz za wartościowe.
- Najlepiej zgłaszać nowe propozycje poprzez [GitHub Issues](https://github.com/AvelDev/osintpolskaxyz/issues).

### Zgłaszanie Błędów

W przypadku zmian w istniejących wpisach:

- Zgłoś błąd lub nieścisłość poprzez [GitHub Issues](https://github.com/AvelDev/osintpolskaxyz/issues).
- Jeśli chcesz zgłosić usunięcie strony (np. bo przestała istnieć), wyjaśnij powód w opisie zgłoszenia.

## Wprowadzanie Zmian

Instrukcje dotyczące edycji bazy i podglądu zmian.

### Edytor GitHub

Możesz użyć wbudowanego edytora na dwa sposoby:

1. Znajdź plik, który chcesz edytować, kliknij ikonę ołówka, wprowadź zmiany i kliknij "Zaproponuj zmiany".
2. Następnie kliknij "Create pull request", opisz swoje zmiany i wyślij zgłoszenie.

**LUB**

1. Zrób "Fork" repozytorium (przycisk w prawym górnym rogu).
2. Na stronie swojego forka naciśnij klawisz `.` (kropka) na klawiaturze. Otworzy to repozytorium w środowisku VS Code w przeglądarce (`github.dev`).
3. Wprowadź zmiany, zatwierdź je (commit) w zakładce Source Control i utwórz Pull Request do głównego repozytorium.

### Środowisko Programistyczne

Jeśli chcesz pracować nad stroną lokalnie lub w chmurze, aby zobaczyć podgląd zmian na żywo:

#### GitHub Codespaces

1. Zrób "Fork" repozytorium.
2. Na stronie swojego forka kliknij zielony przycisk "Code", przejdź do zakładki "Codespaces" i kliknij "Create codespace".
3. Po załadowaniu środowiska uruchom w terminalu komendę `pnpm install && pnpm docs:dev`.
4. Kliknij "Open in Browser", aby zobaczyć podgląd strony.

#### Instancja Lokalna

Praca na lokalnym repozytorium wymaga zainstalowanego środowiska Node.js oraz menedżera pakietów `pnpm`.

1. Sklonuj repozytorium: `git clone https://github.com/AvelDev/osintpolskaxyz.git`
2. Wejdź do katalogu: `cd osintpolskaxyz`
3. Zainstaluj zależności: `pnpm install`
4. Uruchom serwer deweloperski: `pnpm docs:dev`
5. Otwórz adres wyświetlony w terminalu (zazwyczaj `http://localhost:5173`).
