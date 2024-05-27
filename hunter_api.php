<?php

$apiKey = 'd5926147ad7d749e9ce3a5722f5c3acfe3541b3a';
$domain = $_GET['domain'];

$url = 'https://api.hunter.io/v2/domain-search?domain=' . urlencode($domain) . '&api_key=' . $apiKey;

$response = file_get_contents($url);

$data = json_decode($response);

$emails = [];
foreach ($data->data->emails as $email) {
    $emails[] = $email->value;
}

echo json_encode(['emails' => $emails]);
?>
