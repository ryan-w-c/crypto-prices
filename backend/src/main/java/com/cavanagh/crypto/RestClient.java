package com.cavanagh.crypto;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class RestClient {

    private HttpClient client = HttpClient.newHttpClient();

    public String returnRequest(String uri, String search) throws IOException, InterruptedException {
        //get request
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(uri))
                .build();

        HttpResponse<String> response =
                client.send(request, HttpResponse.BodyHandlers.ofString());

        // returns price of coin
        int start = response.body().indexOf(search) + search.length() + 2;
        while (!Character.isDigit(response.body().charAt(start))) {
            start += 1;
        }
        int end = start + 1;
        while (Character.isDigit(response.body().charAt(end)) || response.body().charAt(end) == '.') {
            end += 1;
        }
        return response.body().substring(start, end);
    }

}