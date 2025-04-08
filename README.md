# Creating HeroLens: Tips and Insights from My LandingLens Project

> This article was originally published by the LandingLens editor on their community forum. [Check out the original post](https://community.landing.ai/c/ask-the-community/creating-herolens-tips-and-insights-from-my-landinglens-project).

Summary: I recently completed the Machine Learning Certificate courses from DeepLearning.AI and applied my newfound knowledge to a side project called HeroLens. This project uses LandingAI's LandingLens model to build a custom-tuned computer vision model that recognizes superheroes from the Marvel universe. In this post, I’ll share my experience building HeroLens, the challenges I faced, and some tips on using LandingLens effectively. Whether you're curious about building similar models or just interested in learning more about LandingLens, I hope you'll find this helpful!

The name "HeroLens" is a playful nod to LandingAI's product, LandingLens—I hope you catch the humor in the name similarity (both with "lens" in it).

Check out the quick demo below, where I visit my web app at www.herolens.us, download a sample image, and upload it to query the LandingLens API. The model correctly identifies and labels the character as Iron Man.

![hero-lens-demo](https://github.com/user-attachments/assets/1c3217b0-b1f2-40e9-af4f-dd4cc3e3383c)


Or, you can try it out yourself by visiting www.herolens.us. Yes, I even bought a custom domain to make this side project feel more official and serious 😉.

## Site Logo

I also want to give a shout-out to GPT, which helped me create a site logo that perfectly captures the essence of HeroLens. The logo features a camera lens with an eye in the center, and a Superman logo in the background, conveying the idea of a "hero lens" beautifully! The initial design had a different background color, but I manually adjusted it to match my site's theme.

<img width="761" alt="Screenshot 2024-08-23 at 14 28 27" src="https://github.com/user-attachments/assets/d414a90b-945a-4119-8304-d9aaa8fd062e" />

## Training the Model with LandingAI

LandingAI's flagship product, LandingLens, provides a robust infrastructure for building your own Large Visual Model (LVM). It makes computer vision accessible to everyone. Founded by Andrew Ng, whose ML certificate course I completed, LandingAI has been instrumental in my journey. Thank you, Andrew, for your pioneering work and your dedication to educating people about AI.

Using LandingLens is straightforward, with just three steps to build your own model:

1. Upload and Label Your Images
2. Train your model and evaluate its performance
3. View your model’s predictions and deploy

LandingLens offers an intuitive web app where you can easily upload and label your images. Labeling helps the AI understand what's in the image. For example, in the picture below, I manually labeled ten Iron Man images, drawing rectangles around each one to help the AI recognize the character.

Once labeling is complete, moving on to steps 2 and 3 is just a matter of a few clicks to train and deploy your model.

<img width="1840" alt="landinglens-web-app" src="https://github.com/user-attachments/assets/31d5aae1-99da-44e5-b339-7b71a1859601" />

After a successful deployment, LandingLens provides an API that you can use to upload images for recognition. Here’s a sample curl command. YOUR_APIID and YOUR_APIKEY are API credentials from LandingLens:

```bash
curl --location --request POST 'https://predict.app.landing.ai/inference/v1/predict?endpoint_id=<YOUR_APIID>' \
     --header 'Content-Type: multipart/form-data' \
     --header 'apikey: <YOUR_APIKEY>' \
     --form 'file=@"YOUR_IMAGE"'
```

## The HeroLens Web App

After building and deploying the model, I developed the HeroLens web app using React and Next.js. The app provides a user-friendly interface to interact with the model. Beyond the core feature that allows users to upload an image and query the LandingLens API to label it, I added a few more features:

1. Responsive design for both desktop and mobile views (thanks to TailwindCSS, which made this super easy).
2. A database to store records of users who upload hero images. In the HeroLens web app, users can perform CRUD operations on these records. Thanks to Vercel, hosting the app on the cloud and connecting it with PostgreSQL was a breeze.

![herolens-demo](https://github.com/user-attachments/assets/d7784943-5009-4587-8940-da6fcdff85aa)

## Source Code

My app’s code is open-sourced under the MIT license(HeroLens GitHub Repo). It utilizes React 18’s latest features, including server-side components and actions, to implement CRUD operations. Credit: I borrowed some code from the Next.js learning tutorial.

## Future Enhancements

Even though LandingLens is powerful and easy to use, it still requires a significant amount of time to upload and label images for training the model. Currently, I've only uploaded about 10 profile pictures of Iron Man, which means the model can only recognize Iron Man in profile shots, but not other heroes. To enhance the model’s capabilities, more images need to be uploaded and labeled.

The app currently uses mock data to display LandingLens API stats, such as model size, epoch, and training date. It also uses mock user data to show who uploaded which hero images for display purposes. It would be more interesting to use real data.

Authentication is not yet implemented, so anyone can modify the data.

Lastly, the images users upload are not stored in our system; they are used directly to call the model API. This means that users cannot retrieve their uploaded images later.

---

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
