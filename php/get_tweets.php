<?php
  require_once('TwitterAPIExchange.php');

  $search = $_POST['search'];

  $settings = array(
    'oauth_access_token' => "628436830-rWuBxUkiBZezy0DougbjelGbBz0NWjk0uXOY0Wr5",
    'oauth_access_token_secret' => "PTRb3AqI9kzOrghUQuSz7OnHpUVMoNfxCnUwyFmd2qqcD",
    'consumer_key' => "hr7qx4T7BjPIY5BBe9m8AYEaI",
    'consumer_secret' => "aJjui6EH7RD2XgIGyfiln0MrncD5cslnqnME9ZJtd5xFnCU6Z6"
  );

  if (isset($_POST['search'])) {
    $url = 'https://api.twitter.com/1.1/search/tweets.json';
    $getfield = '?q=';
    $getfield .= $search;
    $getfield .= '&result_type=recent&count=500';
    $requestMethod = 'GET';

    $twitter = new TwitterAPIExchange($settings);
    $response = $twitter->setGetfield($getfield)
        ->buildOauth($url, $requestMethod)
        ->performRequest();

    echo $response;
  } else {
    echo 'There was a problem making your request.';
  }

?>
