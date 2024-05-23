const Data = [
  {
    normal: [
      {
        title: "Normal Distribution",
        content: "",
        // image: "/img/ml/normalBg.png",
      },
      {
        title: "What is Normal Distribution?",
        content:
          "Normal Distribution or Gauss or Gaussian Distribution is a bell-shaped curve that describes the probability of a continuous random variable. It's one of the most important concepts in statistics and probability because it shows up in many real-world phenomena. From heights of people, IQ of people, measurement errors, salaries, all follow the Gauss Distribution.",
      },
      {
        title: "Parameters of Normal Distribution",
        content: [
          {
            title: "Mean (μ)",
            content:
              " The mean determines the location of the peak, and most of the data points are clustered around the mean in a normal distribution graph.",
          },
          {
            title: "Standard Deviation (σ)",
            content:
              "It determines how far the data points are away from the mean and represents the distance between the mean and the data points. A smaller standard deviation w.r.t. to the mean results in a steep curve while a larger standard deviation results in a flatter curve.",
          },
        ],
      },
      {
        title: "Properties of Normal Distribution",
        content: [
          {
            title: "Symmetric",
            content:
              "The normal distribution is symmetric about the mean. The left half of the distribution is a mirror image of the right half.",
          },
          {
            title: "The mean, median, and mode are equal",
            content:
              "The mean, median, and mode of a normal distribution are always equal which is the center peak.",
          },
          {
            title: "The area under the curve is equal to 1",
            content:
              "The total area under the curve is equal to 1. This could be visualized as the probability of the entire sample space.",
          },
          {
            title: "Empirical Rule ",
            content:
              "In normally distributed data, there is a constant proportion of data which lie between the mean and some number of standard deviation. Thus, for Normal Distribution, almost all values lie between three standard deviations of mean",
          },
        ],
        image: "/img/ml/normalPic.webp",
      },
      {
        title: "The formula for Normal Distribution",
        content:
          "The method of finding whether data is normally distributed or otherwise is to draw a normal probability distribution plot. Given different values of the random variable, you can calculate the probability using the probability density function below.",
        image: "",
      },
      {
        title: "Sample Code",
        content:
          "import numpy as np<br/>import matplotlib.pyplot as plt<br/>from scipy.stats import norm<br/>import pandas as pd<br/><br/><br/>heightWeight = pd.read_csv('heightWeight.csv')<br/>heightWeight.head()<br/>data = heightWeight['Height(Inches)']<br/>data<br/><br/><br/>mean = np.mean(data)<br/>std = np.std(data)<br/><br/><br/>plt.figure(figsize=(12,8))<br/>plt.hist(data, bins=25, density=True, alpha=0.6, color='#51613f')<br/><br/><br/>xmin, xmax = plt.xlim()<br/>x = np.linspace(xmin, xmax, 100)<br/>probability_density = norm.pdf(x, mean, std)<br/><br/><br/>plt.plot(x, probability_density, linewidth=3, color='purple')<br/><br/><br/>plt.xlabel('Data points')<br/>plt.ylabel('Probability Density')<br/>plt.title('Normal Distributions', fontsize=16)",
        output: "/img/ml/normalOutput.png",
      },
      {
        title: "Applications of Normal Distribution",
        content: [
          {
            title: "Recommendation Systems",
            content:
              "E-commerce platforms and social media companies use Gaussian distributions to model user preferences. By analyzing past purchases or interactions, they predict items or content users are most likely to engage with (e.g., suggesting products with similar features to past purchases).",
          },
          {
            title: "Spam Filtering",
            content:
              "Email providers use the Gaussian distribution to model typical email characteristics. Deviations from this normal distribution (e.g., unusual sender addresses, large attachment sizes) might indicate spam emails that get flagged for review.",
          },
          {
            title: "Image and Signal Processing",
            content:
              "Gaussian functions are used for tasks like image blurring (reducing noise) or edge detection. The bell-shaped curve of the Gaussian distribution helps smooth out sudden variations in pixel intensities, creating a blur effect.",
          },
          {
            title: "A/B Testing",
            content:
              "Tech companies often run A/B tests to compare different versions of a website or app feature. The Gaussian distribution helps analyze the results and determine if the observed differences between the versions are statistically significant.",
          },
          {
            title: "Fraud Detection",
            content:
              "Financial technology companies use the Gaussian distribution to model typical transaction patterns. Significant deviations from this normal behavior (e.g., unusual purchase amounts or locations) might indicate potential fraudulent activity.",
          },
        ],
      },
    ],
  },
];

export default Data;
