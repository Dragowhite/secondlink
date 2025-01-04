document.getElementById("simpan").addEventListener("click", () => {
    // Ambil nilai input
    const tanggal = document.getElementById("tanggal").value;
    const deskripsi = document.getElementById("deskripsi").value;
    const namaAnggota = document.getElementById("namaAnggota").value;
    const debit = document.getElementById("debit").value;
    const kredit = document.getElementById("kredit").value;
    const keterangan = document.getElementById("keterangan").value;

    // Cek apakah ada data yang kosong
    if (!tanggal || !deskripsi || !namaAnggota || !debit || !kredit || !keterangan) {
        alert("Mantap, di tes gk tuh, lanjut🤣. Tolong isi terlebih dahulu👍");
        return;
    }

    // Jika semua data sudah diisi, tampilkan konfirmasi
    const isConfirmed = confirm("Apakah Anda yakin ingin menyimpan data transaksi ini?");
    if (isConfirmed) {
        // Jika dikonfirmasi, tampilkan data yang telah diinput
        console.log({
            tanggal,
            deskripsi,
            namaAnggota,
            debit,
            kredit,
            keterangan,
        });

        alert("Data transaksi berhasil disimpan!");
    } else {
        alert("Penyimpanan data dibatalkan.");
    }
});
