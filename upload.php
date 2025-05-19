<?php
// Visa fel vid behov
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Anslut till databasen
$conn = new mysqli("localhost", "root", "", "gladkaka_db");
if ($conn->connect_error) {
    die("Anslutningen misslyckades: " . $conn->connect_error);
}

// När formuläret skickas
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_FILES["imageUpload"]) && $_FILES["imageUpload"]["error"] == 0) {
        $imageTmpPath = $_FILES["imageUpload"]["tmp_name"];
        $imageName = basename($_FILES["imageUpload"]["name"]);
        $imagePath = "uploads/" . $imageName;

        $allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        $imageType = mime_content_type($imageTmpPath);

        if (in_array($imageType, $allowedTypes)) {
            if (move_uploaded_file($imageTmpPath, $imagePath)) {
                echo "<p>✅ Bilden laddades upp!</p>";

                // Lägg in bildinfo i databasen
                $stmt = $conn->prepare("INSERT INTO images (image_name, image_path) VALUES (?, ?)");
                $stmt->bind_param("ss", $imageName, $imagePath);

                if ($stmt->execute()) {
                    echo "<p>✅ Bildinformation sparades i databasen!</p>";
                    echo "<img src='$imagePath' style='max-width:300px; margin-top:20px;'>";
                } else {
                    echo "<p>❌ Fel vid databassparning.</p>";
                }
                $stmt->close();
            } else {
                echo "<p>❌ Kunde inte flytta filen.</p>";
            }
        } else {
            echo "<p>❌ Endast JPG, PNG eller GIF tillåtna.</p>";
        }
    } else {
        echo "<p>❌ Ingen fil vald eller ett fel uppstod.</p>";
    }
}

$conn->close();
?>
