# test-solitaire

## jawaban no 2

1.  1. docker build -t testing/welcome .
    2. docker run -p 8000:5000 testing/welcome
2.  docker-compose up --build

## jawaban no 5

1. pertama membuat cluster pada GKE, for example nama cluster nya adalah autopilot
2. GCP secara default sudah memiliki service account (service account adalah account yang digunakan oleh service pada google cloud sehingga service ini memiliki role untuk melakukan sesuatu sesuai dengan permission yang di attach)dengan nama "Compute Engine default service account", dimana service account ini sudah memiliki permission yang dibutuhkan untuk membuat CICD github dan GKE, seperti push image ke artifact registry dan membuat deployment pada GKE
3. Membuat key pair untuk service account tersebut.
4. selanjutnya adalah melakukan setup otentikasi untuk docker.
5. push image sudah dapat dilakukan melalui local machine sehingga image tersimpan pada artifact registry
6. pada github repository pada bagian settings, membuat dua secret yaitu GKE_PROJECT dan GKE_SA_KEY. dan tambahkan projectId ke GKE_PROJECT dan nilai json service account ke GKE_SA_KEY.
