    w2 = width / 2;

    // run through the image, increasing blue, but filtering
    // down red and green:

    for (y = 0; y < height; y++) {
        inpos = y * width * 4; // *4 for 4 ints per pixel
        outpos = inpos + w2 * 4
        for (x = 0; x < w2; x++) {
            r = imageData.data[inpos++] / 3; // less red
            g = imageData.data[inpos++] / 3; // less green
            b = imageData.data[inpos++] * 5; // MORE BLUE
            a = imageData.data[inpos++];     // same alpha

            b = Math.min(255, b); // clamp to [0..255]

            imageData.data[outpos++] = r;
            imageData.data[outpos++] = g;
            imageData.data[outpos++] = b;
            imageData.data[outpos++] = a;
        }
    }
