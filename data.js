const letters = [
  { name: "Celi", message: `Siap, ini kata-kata ulang tahun yang panjang dan hangat buat kamu kirim:

---

Selamat ulang tahun! 🎉

Hari ini bukan hari biasa. Hari ini adalah hari di mana dunia jadi sedikit lebih terang karena kamu lahir. Aku bersyukur banget bisa kenal dan punya kamu di hidupku.

Semoga di usia yang baru ini, kamu dikelilingi hal-hal baik yang selama ini kamu usahakan. Semoga setiap doa yang kamu bisikkan pelan-pelan dalam hati, satu per satu mulai dijawab dengan cara yang bahkan nggak kamu sangka sebelumnya.

Aku harap tahun ini jadi tahun di mana kamu lebih berani buat coba hal baru, lebih sabar sama proses, dan lebih sayang sama diri sendiri. Kalau ada capeknya, semoga cepat berlalu. Kalau ada bahagianya, semoga berlipat-lipat dan jadi cerita yang kamu ceritain berulang kali sambil ketawa.

Jangan lupa berhenti sejenak dan lihat seberapa jauh kamu udah melangkah. Mungkin jalannya nggak selalu mulus, tapi kamu tetap jalan. Itu udah keren banget. 

Aku doain kesehatan yang selalu dijaga, rezeki yang lancar dan berkah, hati yang tenang, dan orang-orang baik yang selalu ada di sekitarmu. Semoga setiap langkahmu tahun ini membawa kamu lebih dekat ke versi dirimu yang paling kamu banggakan.

Sekali lagi, selamat ulang tahun. Semoga kamu bahagia hari ini, dan bahagia juga di 364 hari setelahnya. Makasih udah jadi kamu.

---

Mau aku bikinin versi yang lebih lucu, formal, atau romantis buat pacar/teman/keluarga?` },
  { name: "Ian", message: "Happy Birthday remi,semoga hal baik selalu beriringan denganmu,semoga semesta selalu berpihak kepadamu,semoga jalanmu untuk mencapai masa depan cerah di permudahkan,teruslah tumbuh,teruslah melangkah & berbahagialah. SELAMAT BERKELANA, I WILL ALWAYS SUPPORT U FROM AFAR🤍" },
  { name: "Mitsu", message: `Mungkin Kita baru kenal bentar tapi terimakasih sudah menjadi temanku, semoga kedepannya kita tetap menjadi teman yak !

Semoga kamu selalu dikelilingi orang-orang baik, selalu diberikan kesehatan, dan kebahagiaan yang tiada habisnya.
Jangan pernah berubah jadi orang yang baik, dan teruslah jadi dirimu sendiri!
Semoga di tahun ini semua mimpi-mimpi besarmu mulai terlihat jelas jalannya.

Selamat menjadi dewasa, Remi.` },
  { name: "Cia", message: "Happyy birthday for my online sisterr!!\n\nhiii my favorite person OMG OMGG KA REMIK THIS IS YOUR BIRTHDAY TODAYYYY!! IM SO HAPPYY RIGHT NOWWW YEYYYY CIA SENENGG KA BISA KETEMU KA REMIIKKK cia doainnn ka remikk panjang umur sehat selaluuu, semogaa apa yang ka remikk inginkan bisa terwujuddd yaaaa makasihh udah anggepp cia kayakk adikk sendirii cia sayangg ka remikkk bahagia teruss yaa ka remiiikkk selaluu samaa ciaa, ciaa harappp ka remikk bisa menjadii kepribadiann yangg lebihh baikk dan jauhh lebihh kuatt dari yang kemarinnn jangannn runtuhinnn dirii kamu dengan omongan omongann orangg lain yaa ka remikkkk apa yangg ka remikk jalaninn selaluu diberikan kelancarann cia selaluuu doainn yang terbaikk buat kakakk ciaaaaa i wish in another life ka remik bisa jadi kakakk akuuu SELALUUU HAPPYYY YAAAA KA REMIKKKK JANGAN LUPAA SENYUMMMM HEHEEEE LOVEE YOUU KA REMIKKK SAYANKKKKKK KAMU CANTIIIIIKKKKKKK MWAAAAHH" },
  { name: "Bang Antaris", message: "Happy Birthday, Remi! 🎉🎂\n\nSemoga di usia yang baru ini kamu selalu diberikan kesehatan, kebahagiaan, dan kemudahan dalam setiap langkahmu. Semoga semua impian, harapan, dan cita-citamu bisa tercapai satu per satu. Tetap jadi pribadi yang baik, kuat, dan selalu membawa energi positif untuk orang-orang di sekitarmu.\n\nNikmati hari spesialmu, buat banyak kenangan indah, dan jangan lupa untuk selalu tersenyum. Selamat ulang tahun, Remi! Semoga tahun ini menjadi tahun terbaik untukmu. 🎈✨" },
  { name: "Rangga", message: `🥳"HAPPY BIRTHDAY KAA REMII"🥳
makasih udah jadi temen kuu walaupun aku aga absurd terkadang yaa begitu dehh, oiyaa ka remii panjang umur nyaa yaa, jadi anak baik teruss, semuaa kesalahan ka remii udaa ku maafin dan kebaikan ka remii udaa aku terimaa makasii ka remii buat semuanya🥳🥳
HBD YAA BESTIE 
terimakasih sudah menjadi teman yang kuatt,setiaa,dan nda pergi walaupun semua tingkah ku kadang bikin ka remii kesall atau marahh,semua orang sayang ka remii disinii,maaf ucapan nya aga telat yaa ka remi semoga semua hal baik menyertai ka remii nyep🥳🎉

inii hari bahagia kamuu ka remm ayoo lakuin keseruan bareng barengg✨` },
  { name: "Kiyara", message: "new level unlocked!\ncheers to 17 ka remi❕\nsemoga wishlistnya tercapai ditahun ini tanpa struggle yaa, TERNYATA AKU LEBIH TUA TP KAYAK UDAH TERBIASA MANGGIL KAK JD KAYA WHHSHSHWHSHSHS gitchu deh. semoga ka remi makin semangat megang fever biar kita bocil bocil fever semakin close each other, wishing u all the best ka remiii🩷" },
  { name: "Kenzo", message: `Happy Seventeen, Remi! 

Wishing you a very happy birthday! Di usia yang ke-17 ini, semoga kamu semakin dewasa dalam berpikir maupun bertindak. Semoga setiap langkah yang kamu ambil membawa kebaikan, kebahagiaan, dan pengalaman berharga untuk masa depanmu.

Semoga segala urusan, cita-cita, dan impianmu dilancarkan oleh Tuhan Yang Maha Esa. Tetap menjadi pribadi yang baik, terus berkembang, dan jangan pernah berhenti mengejar apa yang kamu inginkan.

Selamat ulang tahun yang ke-17, Remi! Semoga tahun ini menjadi salah satu bab terbaik dalam hidupmu.`},
  { name: "Ka Bubub", message: `Untuk Remi,

Hari ini bukan cuma tentang bertambahnya angka, tapi tentang bertambahnya cerita, pelajaran, dan jejak yang sudah kamu tinggalkan.

Semoga usiamu membawa lebih banyak ketenangan daripada keramaian, lebih banyak orang tulus daripada sekedar yang datang saat perlu, dan lebih banyak keberanian untuk menjadi dirimu sendiri.

Semoga hal-hal baik menemukan jalan pulang kepadamu bahkan saat kamu sedang tidak mencarinya.

Terima kasih sudah bertahan sejauh ini untuk hidup kamu. Selamat ulang tahun, Remi. Semoga hidup memperlakukanmu dengan lembut dan masa depan menyambutmu dengan banyak kemungkinan indah 🌙✨
aamiinn allahuma aamiinn🫶`},
  { name: "Bang Fly", message: `Selamat ulang tahun ya Remi 🎉🎂

Akhirnya nambah umur lagi wkwk. Semoga makin gede pikirannya, bukan makin gede maunya doang.

Semoga sehat terus, banyak rezeki, urusan dipermudah, dan yang diharapin satu-satu mulai dateng. Jangan kebanyakan begadang.

Tetap jadi Remi yang sekarang, tapi versi yang lebih happy dan lebih santai jalanin hidup.

Udah, hari ini nikmatin aja. Makan yang enak, ketawa yang banyak.

Happy birthday remiii, hadiah? nanti kita bahas 😎🎁`},
  { name: "Chiyoo", message: `hbd ka remi!! semoga panjang umur, sehat selalu, banyak rezeki, dan makin bahagia. semoga tahun ini jadi tahun yang penuh hal-hal baik buat ka remi ✦
૮ ˶ᵔ ᵕ ᵔ˶ ა`},
  { name: "Kelvin", message: `HAPPY BIRTHDAY REMUYY 🥳✨

udah 17 tahun aja lu di dunia ini haha. jangan lupa sama tuhan ya muyy.


semoga semua urusan lu dimudahin tahun ini, rejeki lu + ur family dilancarin. intinya wish u all the best lah.

sehat selalu yaa muyy. kangen deh kill lu di werewolf wkwk. next ya kalo urusan RL gw udah selesai kita mabar ww lagi hehe 🤭

stay awesome, stay u and proud of u girl 🤍✨!`},
  { name: "Khai", message: "halo remi,maaf banget kalo aku jarang online soalnya sibuk banget ama kerja sekolahan..aku mau ucapin SELAMAT HARI LAHIR , HAPPY BIRTHDAY BUAT ADMIN/CEO KU TERSAYAANGGGG MWAHHH🎀🎀🎀🎀🎀semoga rejeki kamutuh datanggg terus + dipanjangkan umur🤪✌️ iloveyou remii MWAHHHH" },
  { name: "Chacuu", message: "happy birthday rem ! semoga kamu nya makin happy , sehat selalu , makin sukses dan semua impian kamu tercapai yaa aamiin 🤍 thank u rem selama ini udah jadi temen online gw sekaligus owner yang paling baik ❤️ honestly aku bersyukur banget bisa kenal sama kamu thank u udah selalu bikin server jadi tempat yang seru , nyaman dan banyak kenangan buat orang orang di sana ngl server kamu salah satu server paling asik yang pernah aku join bukan cuma karena servernya tapi karena orang orang di dalamnya juga bisa ketemu orang baik kayak kamu semoga servernya terus berkembang makin ramai dan semua usaha kamu selama ini berjalan lancar ya rem i hope this new age brings you more happiness , success and good things in life semoga kamu selalu dikelilingi orang orang yang sayang dan menghargai kamu jangan pernah lupa kalau kamu udah jadi alasan banyak orang senang lewat hal kecil yang kamu buat once again happy birthday remi 💓 enjoy your special day yaa , semoga hari ini jadi hari yang terseru di hidup kamu remi dan owner kesayangan aku 💗" },
  { name: "Noelle", message: "HAPPY BIRTHDAY REMIIIIIIII aka my partner in crime 🫠🫶🏻 i miss u so bad ma love t__t we should meet more often woi!!! yk i love u sooo muuucjh, selama ini u really bring so much color in my life ☹️ thank u for always understand me, selalu mau dengerin my stupid story && those contekan yang kita buat sebelum ujian 😭😭 sumpah deh kalo gaada km kayanya nilai ujian aku selalu nol deh. i hope this year will be muuuchh better than last year yaa sayangku 🥺🩷 be happy and remember that im always here for u ❤️ if u need something or ada sesuatu yang ga enak di kepala just tell me about it yaa 🩷 remember ITS UR DAY!! jadi jangan sedih sedih and please remember ada banyak orang yang peduli dan sayang sama kamu di dunia ini remi sayangg. jangan selalu mikir kalo you're not enough ☹️☹️ you're more than enough and deserve to be happy 🩷 sweet seventeen ma love ❤️\n\nxoxo Noelle" },
  { name: "Lora", message: `HAPPY BIRTHDAYYY, REMUYYY!! Semoga hari-harimu ke depan selalu dipenuhi sama hal-hal baik🌟, tawa yang lepas😆, dan keberuntungan✨. Makin sukses sekolahnya, dan tetep jadi Remi yang selalu ceria💞.
May this new chapter of your life bring you endless joy, success, and all the love you deserve. You've been such a great friend, and I hope tomorrow is as wonderful and bright as your smile. Happy birthday, Remi! May all your wishes come true, and I hope you have the most fantastic day tomorrow🥳💞`},
  { name: "Yan", message: "🎉🎉🎊🎊❤️❤️ Haaappy biiiirthdaay remii, semoga panjang umur sehat selalu, jaya, sukses, jadi tinggi 🎉❤️😘😘😘😘🎊❤️" },
  { name: "Bebbie", message: `Happyy Birthday !! 🎂🤍

kak remi, dek remi,CAHAYA hidup ku 🤭
THANK U SM SM SM SM
udah jadi sahabat gue 
😭😭🤍🤍🤍
makasih udah bikin fever jadi sekeren ini karna di tangan lu 🤍😭😭😭 maaf karna gue hrus off tbtb krna ya lu tau lah alasannya apa😢 MAKASIH KARNA UDAH AJAKIN GUE MAIN DISCORD ternyata jomblo tnpa pacar jdi menyenangkan krna downloud discord 🥰
owner hebat owner kuat 🤍
tetep semangat di mataram🤍
serius sekolahhya sampaii ke jenjang berikutnya 🤍🤍 KURANGIN GEM NYA klo ada tugas langsung kerjain baru nge game!!! jgn lupain gue ya wlaupun kita beda kota 🥹🤍🤍
apapun itu kelakuan misan lu yg kuwat nyak 🤍🤍🤍🤍🤍
GUE DOAIN LU BISA KEBELI PC PAKE UANG SENDIRI 💋✌🏻
kalo ada masalah ttep cerita ke noel ataupun gue YA jgn pendem sendiriaN
 GUE SAYANG LU SEMUA SAYANG LU
 (preng sumpah preng)
loveu kelinci jawa and SWEETCEPINTINN`},
  { name: "Sasa", message: `happy sweet seventeen ka remuyy🥳
all the best wishes for u ka remuy cayangg 🤗

semogaa panjang umurr dan sehat selaluuu, semogaa semua keinginan ka remii bisa tercapaii🫶🏻, dann semogaa di umur yang baru inii ka remii selalu sehatt, bahagia, dan di kelilingi banyak hal baikk.
i hope 17 treats u kindly cz u deserve all the good things in the world🥹💖.

tencuu for always listening to my stories n for trusting me with yours too🫶🏻, sasuyy bersyukur bangett bisaa ketemu sama ka remiii💞💞.

enjoyy urr special dayyaa, dont forget to eat lots of good food n be happyyy tudeyyy!!💗💗` },
  { name: "Razz", message: "Happiest of birthday to you, bunny jawaa! Tambahh tua nii. Happy sweetseventen, bunny jawa. Semogaa di tahunn ini dan seterusnyaa lu selaluu dikasih kebahagiaan, panjang umur, sehat selalu, dilancarkann rezekinya, tambah rajin ibadahnyaa, bisa lebih sabar dan lebihh dewasa lagi, dan semuaa harapan luu bisa terwujud satu per satuu. Wishing you all the best! Don't forget to be happy today, enjoy your special day!" },
  { name: "Cza", message: "Happy level upp remii, ciee another year older skrg. happy banget punya temen yg kayak kamuu chill and asikk, apalagi kmu itu orgnya care bgtt, jokes kmu masukk di akuu. jadi orang baik selalu yaa remii like alwayss, thank you for being a good friend yaw. long live" },
  { name: "Tejoo", message: "ehepibede kak remuyyyyy, semoga ente di berikan umur yang penjang serta sehat celalu" }
];
