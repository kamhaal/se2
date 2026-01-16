import { Cake } from "model/Cake.model";
import { CakeBuilder } from "./model/builders/cake.builder";
import { ToyBuilder } from "./model/builders/toy.builder";
import { BookBuilder } from "./model/builders/book.builder";

async function main() {
  const cakeBuilder = new CakeBuilder();
  const cake = cakeBuilder
    .setType("Birthday")
    .setFlavor("Chocolate")
    .setFilling("Cream")
    .setSize(8)
    .setLayers(3)
      .setFrostingType("Ganache")
      .setFrostingFlavor("Dark Chocolate")
      .setDecorationType("Sprinkles")
      .setDecorationColor("Gold")
      .setCustomMessage("Happy Birthday")
      .setShape("Round")
      .setAllergies("Nuts")
      .setSpecialIngredients("Organic flour")
      .setPackagingType("Box")
      .setPrice(45.99)
      .setQuantity(1)
    .build();

  console.log("Cake created:", cake);



  const toyBuilder = new ToyBuilder();
  const toy = toyBuilder
    .setName("Action Figure")
    .setType("Figure")
    .setMaterial("Plastic")
    .setAgeRange("5-12")
    .setBrand("ToyBrand")
    .setPrice(19.99)
    .setQuantity(2)
    .build();

  console.log("Toy created:", toy);


  const bookBuilder = new BookBuilder();
  const book = bookBuilder
    .setTitle("The Great Adventure")
    .setAuthor("John Doe")
    .setIsbn("123-4567890123")
    .setGenre("Fiction")
    .setPages(350)
    .setPublisher("Fiction House")
    .setPublicationYear(2023)
    .setPrice(14.99)
    .setQuantity(3)
    .build();

  console.log("Book created:", book);
}

main()