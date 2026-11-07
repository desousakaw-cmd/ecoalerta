package br.com.ecoalerta.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.UUID;

@RestController
@RequestMapping("/upload")
public class UploadController {

    private static final String UPLOAD_DIR = "uploads";

    @PostMapping
    public ResponseEntity<String> upload(
            @RequestParam("file") MultipartFile file)
            throws IOException {

        Files.createDirectories(
                Paths.get(UPLOAD_DIR)
        );

        String fileName =
                UUID.randomUUID()
                        + "_"
                        + StringUtils.cleanPath(
                        file.getOriginalFilename()
                );

        Path path = Paths.get(
                UPLOAD_DIR,
                fileName
        );

        Files.copy(
                file.getInputStream(),
                path,
                StandardCopyOption.REPLACE_EXISTING
        );

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(fileName);
    }
}