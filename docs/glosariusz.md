# OSINT Glosariusz

## Podstawowe Pojęcia

| Termin               | Opis                                                                                                                                                                                                                                                                                                           |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **OSINT**            | **Open Source Intelligence** - pozyskiwanie i analiza informacji z publicznie dostępnych źródeł, takich jak strony WWW, media społecznościowe, bazy danych publiczne, dokumenty rządowe i media. OSINT jest legalny gdy wykonywany odpowiedzialnie i etycznie.                                                 |
| **Artefakt**         | Konkretny dowód lub ślad zbierany podczas śledztwa OSINT. Może to być: zrzut ekranu, link, adres email, numer telefonu, data, IP, domena, nazwa użytkownika, zdjęcie lub dowolny inny materialny dowód.                                                                                                        |
| **Timeline**         | Uporządkowana chronologicznie sekwencja zdarzeń związanych z danym obiektem badań. Kluczowy do zrozumienia przebiegu sprawy i relacji przyczynowo-skutkowych. Powinien zawierać daty, czasy, aktorów i zdarzenia.                                                                                              |
| **Footprint**        | (Ślad Cyfrowy) Całość śladów cyfrowych pozostawionych przez osobę lub organizację w internecie. Obejmuje: username, adresy email, profile społeczne, adresy IP, dane DNS, domeny zarejestrowane, wpisy blogowe, komentarze, zdjęcia i wiele innych. Większa powierzchnia ataku = więcej danych do znalezienia. |
| **Doxing**           | Nielegalne i nieetyczne pozyskiwanie i publiczne ujawnianie danych osobowych jednostki w złych intencjach. OSINT robi się odpowiedzialnie i etycznie - doxing to ZAWSZE złe.                                                                                                                                   |
| **OPSEC**            | (**Operational Security**) Zasady i praktyki mające na celu ochronę własnej tożsamości, bezpieczeństwa i prywatności podczas pracy. Kluczowe przy OSINT: używaj VPN, twierdze proxy, nie łącz danych, nie ujawniaj źródeł.                                                                                     |
| **Attribution**      | Proces przypisania działania, publikacji lub komunikatu konkretnej osobie, grupie lub organizacji. Wymaga silnych dowodów i jest trudny do udowodnienia z pewnością 100%.                                                                                                                                      |
| **HUMINT**           | **Human Intelligence** - pozyskiwanie informacji poprzez interakcję z ludźmi (wywiad, rozmowy, spotkania). W przeciwieństwie do OSINT, który jest całkowicie pasywny.                                                                                                                                          |
| **Geolocation**      | Określenie fizycznej lokalizacji danego elementu cyfrowego (IP, foto, tweet) na podstawie metadanych, wskazówek wizualnych lub baz danych.                                                                                                                                                                     |
| **De-anonymization** | Proces odsłonięcia rzeczywistej tożsamości osoby działającej anonimowo online. Przez powiązanie jej działań, stylu pisania, nawyków lub artefaktów cyfrowych.                                                                                                                                                  |
| **Open Source**      | Publicznie dostępna informacja. Może być znaleziona przez każdego bez ograniczeń prawnych. Nie oznacza to, że jest dokładna lub wiarygodna.                                                                                                                                                                    |

---

## Pojęcia Techniczne

| Termin                             | Opis                                                                                                                                                                                                                                                  |
| :--------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Dorking**                        | (**Google Dorking**) Zaawansowana technika wyszukiwania używająca specjalnych operatorów i parametrów aby znaleźć wrażliwe dane indeksowane przez wyszukiwarki. Popularne operatory: `site:`, `inurl:`, `filetype:`, `intitle:`, `intext:`, `cache:`. |
| **Reverse Image Search**           | Technika wyszukiwania oparta na prześledzeniu pochodzenia obrazu. Pozwala znaleźć źródło zdjęcia, jego historię, duplikaty, zmienione wersje oraz inne zdjęcia od tej samej osoby. Narzędzia: Google Images, TinyEye, Yandex, Bing.                   |
| **WHOIS**                          | Baza danych zawierająca informacje o rejestracji domen internetowych. Zawiera: dane właściciela domeny, daty rejestracji, wygaśnięcia, nameservery, kontakt administratora i technika.                                                                |
| **DNS Lookup**                     | (**Domain Name System**) Proces tłumaczenia nazwy domeny (np. google.com) na adres IP. Umożliwia znalezienie: serwerów hostujących domenę, MX rekordów (serwery email), nameserverów, TXT rekordów, historii DNS.                                     |
| **Certificate Transparency (CT)**  | Publicznie dostępny dziennik certyfikatów SSL/TLS wydanych przez Certificate Authorities. Umożliwia odkrycie: domen, subdomeny, serwerów, zmiany infrastruktury. Dostęp bezpłatnie poprzez crt.sh.                                                    |
| **IP Geolocation**                 | Proces ustalenia lokalizacji geograficznej adresu IP (kraj, województwo, miasto, czasem dokładnie). Pomaga w identyfikacji serwera, lokalizacji użytkownika, sprawdzeniu pochodzenia ruchu. Dokładność ~70-80%.                                       |
| **Metadata**                       | (**Metadane**) Dane o danych - informacje osadzone w plikach takie jak: data utworzenia, modyfikacji, lokalizacja GPS, urządzenie, wersja oprogramowania, autor, wymiary, rozmiar. Narzędzie: exiftool.                                               |
| **EXIF Data**                      | (**Exchangeable Image File Format**) specjalny format metadanych w plikach zdjęć zawierający: GPS, czas zrobienia, typ kamery, ISO, aperturę, fokus. Można je usunąć.                                                                                 |
| **Subdomain Enumeration**          | Proces znalezienia wszystkich subdomeny danej domeny (np. api.example.com, admin.example.com). Źródła: CT logs, brute-force, DNS wordlists, API dostawców.                                                                                            |
| **Port Scanning**                  | Skanowanie portów na serwerze aby znaleźć otwarte porty i usługi. Narzędziem: nmap. Porty: 80 (HTTP), 443 (HTTPS), 22 (SSH), 3306 (MySQL), 5432 (PostgreSQL).                                                                                         |
| **Banner Grabbing**                | Ekstrakcja informacji o serwerze (typ, wersja oprogramowania, konfiguracja) poprzez połączenie się do otwartego portu. Czasem ujawnia wrażliwe informacje.                                                                                            |
| **Footprinting**                   | Systematyczne zbieranie informacji o celu (firma, osoba) ze wszystkich publicznych źródeł. Pierwszy etap piramidy OSINT. Bez wdrażania w system.                                                                                                      |
| **Reconnaissance**                 | Szersze pojęcie niż footprinting - zbieranie informacji przy użyciu aktywnych (skanowanie) i pasywnych metod (publiczne dane). Etap przygotowania do ataku.                                                                                           |
| **Social Engineering**             | Manipulacja psychiczna aby skłonić osobę do ujawnienia wrażliwych informacji. OSINT to wspiera ale nie jest tym samym.                                                                                                                                |
| **Username Enumeration**           | Poszukiwanie użytkownika na wielu platformach używając jego nazwy użytkownika. Narzędzie: Sherlock, OSINT Namechk.                                                                                                                                    |
| **Email Enumeration**              | Znalezienie wszystkich adresów email związanych z osobą/firmą. Źródła: LinkedIn, Hunter.io, TheHarvester, RocketReach.                                                                                                                                |
| **Graph Database Analysis**        | Wizualizacja i analiza relacji między różnymi artefaktami (osoby, domeny, IP, maile). Narzędziem: Maltego, Neo4j.                                                                                                                                     |
| **OSINT Fusion**                   | Połączenie informacji z wielu źródeł aby stworzyć kompletny obraz. Wymaga krytycznego myślenia i weryacji danych.                                                                                                                                     |
| **Threat Intelligence**            | Informacja o zagrożeniach bezpieczeństwa - aktorach, ich metodach, infrastrukturze. Opiera się na OSINT.                                                                                                                                              |
| **Indicators of Compromise (IoC)** | Konkretne artefakty wskazujące na złośliwą aktywność: IP adresy, domeny, hashes plików, email'e, URL'e.                                                                                                                                               |

---

## Skróty i Akronimy

| Skrót       | Opis / Rozwinięcie                                                                                                              |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------ |
| **CT**      | **Certificate Transparency** - publicny dziennik certyfikatów SSL wydanych przez Urzędy Certyfikacji. Dostęp: crt.sh            |
| **DNS**     | **Domain Name System** - system tłumaczący nazwy domen na adresy IP. Kluczowy dla OSINT.                                        |
| **IP**      | **Internet Protocol** - unikalny adres identyfikujący urządzenie w sieci. IPv4 (32-bit), IPv6 (128-bit).                        |
| **URL**     | **Uniform Resource Locator** - adres internetowy wskazujący na konkretny zasób. Format: `protocol://domain/path?query#fragment` |
| **HTTP**    | **HyperText Transfer Protocol** - nieszyfrowany protokół transmisji danych w sieci. Port 80.                                    |
| **HTTPS**   | **HyperText Transfer Protocol Secure** - szyfrowana wersja HTTP. Port 443. Wymaga certyfikatu SSL.                              |
| **API**     | **Application Programming Interface** - interfejs umożliwiający komunikację między aplikacjami. Viele OSINT narzędzi ma API.    |
| **VPN**     | **Virtual Private Network** - usługa pozwalająca na szyfrowanie i ukrywanie rzeczywistego adresu IP. Ważne dla OPSEC.           |
| **Proxy**   | Pośrednik między klientem a serwerem. Maskuje IP, pozwala na zmianę lokalizacji, dostęp do zablokowanych zasobów.               |
| **TLD**     | **Top Level Domain** - rozszerzenie domeny (np. .com, .pl, .org, .edu). Czasem wskazuje na region.                              |
| **WHOIS**   | Baza danych z informacjami o rejestracji domen. Dostęp: whois.domaintools.com, whois.net                                        |
| **SSL/TLS** | **Secure Sockets Layer / Transport Layer Security** - protokoły szyfrujące połączenie. Wymagane dla HTTPS.                      |
| **SSH**     | **Secure Shell** - protokół umożliwiający bezpieczne połączenie zdalne z serwerem. Port 22.                                     |
| **FTP**     | **File Transfer Protocol** - protokół do przesyłania plików. Niezaszyfrowany - zagrożenie bezpieczeństwa.                       |
| **SFTP**    | **SSH File Transfer Protocol** - szyfrowana wersja FTP.                                                                         |
| **SMTP**    | **Simple Mail Transfer Protocol** - protokół do wysyłania wiadomości email.                                                     |
| **IMAP**    | **Internet Message Access Protocol** - protokół do pobierania i zarządzania pocztą elektroniczną.                               |
| **POP3**    | **Post Office Protocol 3** - starszy protokół do pobierania poczty elektronicznej. Mniej funkcji niż IMAP.                      |
| **MAC**     | **Media Access Control** - unikalny adres fizyczny urządzenia w sieci lokalnej.                                                 |
| **EXIF**    | **Exchangeable Image File Format** - format metadanych w zdjęciach.                                                             |
| **GIT**     | **Global Information Tracker** - system kontroli wersji. Publiczne repozytoria mogą ujawnić wrażliwe informacje w commitach.    |
| **CDN**     | **Content Delivery Network** - sieć serwerów dystrybuujących zawartość. Utrudnia geolocalizację serwera rzeczywistego.          |
| **ISP**     | **Internet Service Provider** - dostawca usług internetowych.                                                                   |
| **ASN**     | **Autonomous System Number** - unikalny numer identyfikujący sieć. Pomaga w mapowaniu infrastruktury.                           |
| **CIDR**    | **Classless Inter-Domain Routing** - notacja dla bloków adresów IP. Np. 192.168.0.0/24                                          |
| **SIGINT**  | **Signals Intelligence** - podsłuch sygnałów elektronicznych.                                                                   |
| **GEOINT**  | **Geospatial Intelligence** - informacja z analiza lokalizacji geograficznych.                                                  |
| **IMINT**   | **Imagery Intelligence** - analiza zdjęć satelatarnych, dronów, fotografii.                                                     |
| **IoA**     | **Indicators of Attack** - wskazówki przed atakiem (np. skanowanie portów).                                                     |
| **TTL**     | **Time To Live** - czas życia DNS rekordu. Po TTL sekundach zmienia się.                                                        |
| **PTR**     | **Pointer Record** - DNS record tłumaczący IP na domenę (reverse DNS).                                                          |
| **MX**      | **Mail Exchange** - DNS record wskazujący na serwer email domeny.                                                               |
| **TXT**     | **Text Record** - ogólny DNS record zawierający tekst. Czasem weryfikacja domeny.                                               |
| **SPF**     | **Sender Policy Framework** - DNS record do weryfikacji autoryzowanych serwerów email.                                          |
| **DKIM**    | **DomainKeys Identified Mail** - podpis cyfrowy wiadomości email.                                                               |
| **DMARC**   | **Domain-based Message Authentication Reporting & Conformance** - polityka email'owa domeny.                                    |
