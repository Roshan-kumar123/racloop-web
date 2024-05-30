import { FaNetworkWired, FaUser } from "react-icons/fa";
import { TbCurrencyDollarOff, TbTargetArrow } from "react-icons/tb";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { GrPerformance } from "react-icons/gr";

const Data = [
  {
    distributions: {
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
          image: (
            <img
              src="/img/ml/normalPic.webp"
              className="md:h-[400px] md:w-[700px] h-auto w-auto"
            ></img>
          ),
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
      binomial: [
        {
          title: "Binomial Distribution",
          content: "",
        },
        {
          title: "What is Binomial Distribution?",
          content:
            "The binomial distribution is another fundamental concept in probability that deals with situations where there are only two possible outcomes for an experiment. These outcomes are typically referred to as success and failure or a 1 or 0.",
        },
        {
          title: "Breakdown of Binomial Distribution",
          content: [
            {
              title: "Two outcomes",
              content:
                "The key idea is that each trial has just two possible results, like flipping a coin (heads or tails) or answering a true/false question (correct or incorrect).",
            },
            {
              title: "Independent trials",
              content:
                "The trials are independent, meaning the outcome of one trial doesn't affect the outcome of any other trial. For instance, flipping a heads on one coin toss doesn't influence the outcome of the next coin toss.",
            },
            {
              title: "Fixed probability",
              content:
                "The probability of success (p) stays constant throughout all the trials. In a fair coin toss, p(heads) would always be 0.5.",
            },
            {
              title: "Number of trials (n)",
              content:
                "This represents the total number of independent trials conducted.",
            },
          ],
        },
        {
          title: "The formula for Binomial Distribution",
          content:
            "In general, if the random variable X follows the binomial distribution with parameters n ∈ 𝑁 and p ∈ [0,1], we write X ~ B(n, p). The probability of getting exactly k successes in n independent Bernoulli trials (with the same rate p) is given by the probability mass function:",
          image: "/img/ml/binomialFormula.png",
        },
        {
          title: "Bernoulli Distribution",
          content:
            "The Bernoulli distribution is a special case of the binomial distribution where a single trial is conducted (n = 1). It's used to model situations with only two possible outcomes, like a coin flip or a yes/no question. The probability mass function of the Bernoulli distribution is given by:",
          image: "/img/ml/bernoulliFormula.png",
        },
        {
          title: "Sample Code",
          content:
            "from scipy.stats import bernoulli<br/>import pandas as pd<br/>import matplotlib.pyplot as plt<br/>p = 0.7<br/>bern_dist = bernoulli.rvs(p, size=1000)<br/>bern_df = pd.DataFrame({'value' : bern_dist})<br/>bern_values = bern_df['value'].value_counts()<br/>bern_values.plot(kind='bar', rot=0)",
          output: "/img/ml/bernoulliOutput.png",
        },
        {
          title: "Applications of Binomial Distribution",
          content: [
            {
              title: "Software Reliability and Testing",
              content:
                "Binomial Distribution helps estimate the probability of encountering software bugs or errors. By testing a representative sample of the software and tracking successful (no bug) or failed (bug found) tests, we can use the Binomial Distribution to estimate the overall bug count within the entire program with a certain level of confidence.",
            },
            {
              title: "Quality Control and Pass/Fail Inspections",
              content:
                "Manufacturing processes strive for consistency, with products undergoing inspections to ensure quality. The Binomial Distribution can model the number of defective items in a batch. By tracking the number of successful (passes inspection) and failed (fails inspection) items in a sample, we can estimate the overall defect rate within the entire batch.",
            },
            {
              title: "Online Games and Simulations",
              content:
                "Many online games involve random events like winning a fight, dropping a rare item, or triggering a critical hit. The Binomial Distribution can model the probability of these successes (winning, dropping item, critical hit) within a series of attempts (battles, opening loot boxes, attacks).",
            },
            {
              title: "Financial Modeling and Risk Assessment",
              content:
                "In finance, the Binomial Distribution can be used to model scenarios with binary outcomes, like a stock price going up or down. By analyzing historical data and assigning probabilities to each outcome, we can assess potential risks and returns associated with various investment decisions.",
            },
            {
              title: "A/B Testing",
              content:
                "When testing two versions of a website feature or app design, the binomial distribution helps determine the probability of one version being significantly better than the other. Companies can analyze user clicks, conversions, or other metrics to see if the observed success rate (e.g., clicks on a button) deviates significantly from what's expected by chance.",
            },
            {
              title: "Click-Through Rate (CTR) Prediction",
              content:
                "When displaying ads online, companies predict the probability of a user clicking on an ad (success) or ignoring it (failure). The binomial distribution helps estimate the CTR based on historical data and various factors like user demographics and ad content. This allows for better ad targeting and campaign optimization.",
            },
          ],
        },
      ],
      poisson: [
        {
          title: "Poisson Distribution",
          content: "",
        },
        {
          title: "What is Poisson Distribution?",
          content:
            "The Poisson distribution is a probability distribution that describes the number of events occurring in a fixed interval of time or space. It's often used to model rare events that happen independently of each other, like the number of calls to a customer service center in an hour or the number of emails received per day.",
        },
        {
          title: "Properties of Poisson Distribution",
          content: [
            {
              title: "Fixed interval",
              content:
                "The Poisson distribution models the number of events occurring in a fixed interval of time or space. This interval could be an hour, a day, a mile, etc.",
            },
            {
              title: "Rare events",
              content:
                "The Poisson distribution is used for rare events that occur independently of each other. For instance, the number of car accidents at a particular intersection in a day or the number of typos in a book.",
            },
            {
              title: "Constant rate",
              content:
                "The average rate of event occurrences remains constant throughout the interval. For example, if the average number of calls to a customer service center is 10 per hour, it's assumed to be consistent throughout the day.",
            },
            {
              title: "Independent events",
              content:
                "Each event is independent of the others, meaning the occurrence of one event doesn't affect the probability of another event happening.",
            },
          ],
        },
        {
          title: "The formula for Poisson Distribution",
          content:
            "The Poisson distribution is defined by a single parameter, λ (lambda), which represents the average rate of event occurrences in the interval. The probability mass function of the Poisson distribution is given by:",
          image: "/img/ml/poissonFormula.jpeg",
        },
        {
          title: "Sample Code",
          content:
            "import numpy as np<br/>from scipy.special import factorial<br/>import matplotlib.pyplot as plt<br/><br/><br/>mean = 7<br/>x = np.arange(0, 20, 0.1)<br/>y = np.exp(-1 * mean) * np.power(mean, x) / factorial(x)<br/>plt.figure(figsize=(15,8))<br/>plt.title('Poisson distribution with lambda=', fontsize='xx-large')<br/>plt.plot(x, y, 'bs')<br/>plt.show()",
          output: "/img/ml/poissonOutput.png",
        },
        {
          title: "Applications of Poisson Distribution",
          content: [
            {
              title: "Website Traffic Analysis",
              content:
                "Website owners and marketing analysts leverage the Poisson distribution to understand website traffic patterns. By analyzing past data, they can estimate the probability of receiving a specific number of visitors within a given time frame (e.g., hour, day, week). This helps with resource allocation for servers, planning marketing campaigns, and identifying unusual traffic patterns.",
            },
            {
              title: "Call Center Operations",
              content:
                "Call centers experience a fluctuating volume of incoming calls. The Poisson distribution helps predict the probability of receiving a specific number of calls within a certain timeframe (e.g., per minute, per hour). This allows for efficient call center staffing, ensuring enough agents are available to handle the expected call volume and minimize wait times.",
            },
            {
              title: "Manufacturing and Quality Control",
              content:
                "Manufacturing processes strive for minimal defects. The Poisson distribution helps model the probability of finding a specific number of defects in a product or batch. By analyzing the average defect rate per unit, companies can estimate the likelihood of encountering defects and implement quality control measures accordingly.",
            },
            {
              title: "Insurance and Risk Assessment",
              content:
                "Insurance companies use the Poisson distribution to model the probability of claims occurring within a specific period (e.g., car accidents per month, property damage claims per year). This helps them set appropriate insurance premiums and assess potential risks associated with different customer profiles.",
            },
            {
              title: "System Events",
              content:
                "Predicting the number of server crashes, network outages, or errors encountered per day/hour. This helps with resource allocation for handling incidents and preventative maintenance.",
            },
          ],
        },
      ],
      exponential: [
        {
          title: "Exponential Distribution",
          content: "",
        },
        {
          title: "What is Exponential Distribution?",
          content:
            "The exponential distribution is often concerned with the amount of time until some specific event occurs. For example, the amount of time (beginning now) until an earthquake occurs has an exponential distribution. Other examples include the length of time, in minutes, of long distance business telephone calls, and the amount of time, in months, a car battery lasts. It can be shown, too, that the value of the change that you have in your pocket or purse approximately follows an exponential distribution.",
        },
        {
          title: "Properties of Exponential Distribution",
          content: [
            {
              title: "Memoryless Property",
              content:
                "The exponential distribution has a unique property called the memoryless property. This property states that the probability of an event occurring in the future is independent of the past. In other words, the distribution of the remaining time until the event occurs is the same, regardless of how much time has already passed.",
            },
            {
              title: "Continuous Probability Distribution",
              content:
                "The exponential distribution is a continuous probability distribution. This means that it describes the probabilities of the possible values of a continuous random variable.",
            },
            {
              title: "Non-negative Values",
              content:
                "The exponential distribution only takes non-negative values. This makes sense since time cannot be negative.",
            },
            {
              title: "Decaying Probability",
              content:
                "The probability density function of the exponential distribution decreases exponentially as the time increases. This means that the probability of an event occurring in the near future is higher than the probability of the event occurring in the distant future.",
            },
          ],
        },
        {
          title: "The formula for Exponential Distribution",
          content:
            "The exponential distribution is defined by a single parameter, λ (lambda), which represents the average rate of event occurrences. The probability density function of the exponential distribution is given by:",
        },
        {
          title: "Sample Code",
          content:
            "import numpy as np<br>import matplotlib.pyplot as plt<br>from scipy.stats import expon<br>import pandas as pd<br><br>data = pd.read_csv('database.csv')<br>print(data.head())<br><br># Accessing only magnitude column<br>magnitude = data['Magnitude']<br>print(magnitude.head())<br><br>#calculating mean<br>mean = np.mean(magnitude)<br>print('The mean of the magnitude is:{} from which we can plot the exponential distribution'.format(mean))<br><br># Plotting the histogram<br>plt.hist(magnitude, bins=10, edgecolor='black')<br>plt.xlabel('Magnitude')<br>plt.ylabel('Frequency')<br>plt.title('Histogram of Magnitude with mean = {mean:.3f}'.format(mean = mean))<br>plt.show()",
          output: "/img/ml/exponentialOutput.png",
        },
        {
          title: "Applications of Exponential Distribution",
          content: [
            {
              title: "Reliability Engineering and Failure Analysis",
              content:
                "The exponential distribution is a fundamental tool in reliability engineering. It helps estimate the probability of a system or component failing after a certain amount of time. Analyzing how long components like light bulbs, electronic devices, or machinery last before failure allows engineers to predict maintenance needs, assess product lifespans, and improve system reliability.",
            },
            {
              title: "Customer Service and Call Center Operations",
              content:
                "Call centers handle a constant flow of incoming calls. The exponential distribution helps model the time between calls, allowing for better staffing decisions. By understanding the average wait time between calls, managers can ensure enough agents are available to minimize customer wait times and optimize call center operations.",
            },
            {
              title: "Queueing Theory and Waiting Times",
              content:
                "The exponential distribution is a cornerstone of queueing theory, which analyzes waiting lines and customer service systems. It helps model the time customers spend waiting in line for service (e.g., at a bank or grocery store). This allows businesses to optimize resource allocation, improve customer experience, and reduce wait times.",
            },
            {
              title: "Software Development and Bug Fixing",
              content:
                "Software development involves fixing bugs and errors. The exponential distribution can model the time between encountering bugs in the code. This helps developers estimate the average time required for debugging and fixing issues, allowing for more efficient development lifecycles.",
            },
            {
              title: "E-commerce",
              content:
                "The time between customer purchases can be modeled with the exponential distribution. This allows businesses to predict sales patterns and optimize inventory management.",
            },
          ],
        },
      ],
      geometrical: [
        {
          title: "Geometric Distribution",
          content: "",
        },
        {
          title: "What is Geometric Distribution?",
          content:
            "It describes the chances of achieving success in a series of independent trials, each having two possible outcomes. The geometric distribution thus helps measure the probability of success after a given number of trials. In a geometric distribution, each event is called a Bernoulli trial. Each Bernoulli trial has two outcomes—success or failure—with a fixed probability. The probability of success in a trial does not change across trials. Each trial is thus independent of past or future trials. ",
        },
        {
          title: "Properties of Geometric Distribution",
          content: [
            {
              title: "Fixed Probability",
              content:
                "The probability of success (p) remains constant throughout all trials. For example, the probability of flipping heads in a fair coin toss is always 0.5.",
            },
            {
              title: "Independent Trials",
              content:
                "Each trial is independent, meaning the outcome of one trial doesn't affect the outcome of any other trial. For instance, flipping heads on one coin toss doesn't influence the outcome of the next coin toss.",
            },
            {
              title: "Number of Trials",
              content:
                "The geometric distribution models the number of trials needed to achieve the first success. This could be the number of coin flips needed to get heads or the number of attempts to make a free throw in basketball.",
            },
          ],
        },
        {
          title: "Formula for Geometric Distribution",
          content:
            "The probability mass function (PMF) of the geometric distribution is given by:",
          image: "/img/ml/geometricFormula.png",
        },
        {
          title: "Sample Code",
          content:
            "import numpy as np<br>import matplotlib.pyplot as plt<br>from scipy.stats import geom<br><br># Geometric Distribution<br># Define the probability of success (p)<br>p = 1/6 # Probability of rolling a six on a fair six-sided die<br># Generate x values (number of trials)<br>x = np.arange(1, 25, 1)  # Geometric distribution starts from 1<br><br># Calculate the probability mass function (PMF) for the geometric distribution<br>pmf = geom.pmf(x, p)<br><br># Plot the PMF<br>plt.figure(figsize=(12, 8))<br>plt.bar(x, pmf, color='darkblue')<br>plt.title('Geometric Distribution', fontsize=16)<br>plt.xlabel('Number of Trials')<br>plt.ylabel('Probability')<br>plt.show()",
          output: "/img/ml/geometricOutput.png",
        },
        {
          title: "Applications of Geometric Distribution",
          content: [
            {
              title: "Quality Control and Manufacturing",
              content:
                "In manufacturing, the geometric distribution can model the number of defective products in a batch. By analyzing the probability of encountering a defective item after a certain number of inspections, companies can estimate the overall defect rate and implement quality control measures.",
            },
            {
              title: "Customer Service and Call Center Operations",
              content:
                "Call centers handle a constant flow of incoming calls. The geometric distribution helps predict the number of calls needed to resolve a customer issue. By understanding the average number of calls required to address a problem, managers can optimize call center staffing and improve customer service efficiency.",
            },
            {
              title: "Software Development and Debugging",
              content:
                "Software development involves fixing bugs and errors. The geometric distribution can model the number of attempts needed to debug and fix an issue. This helps developers estimate the average time required for debugging and improving code quality.",
            },
            {
              title: "Marketing and Conversion Rates",
              content:
                "In marketing, the geometric distribution can model the number of attempts needed to convert a lead into a customer. By analyzing the probability of achieving a successful conversion after a certain number of interactions, businesses can optimize their marketing strategies and improve conversion rates.",
            },
            {
              title: "Online Gaming and Probability",
              content:
                "Many online games involve random events like winning a battle, finding a rare item, or unlocking a new level. The geometric distribution can model the probability of achieving these successes after a series of attempts. This helps game developers design engaging gameplay mechanics and reward systems.",
            },
          ],
        },
      ],
    },
    linearRegression: [
      {
        title: "Linear Regression",
        content: "",
      },
      {
        title: "What is Machine Learning?",
        content:
          "Machine Learning is a branch of Artificial intelligence that focuses on the development of algorithms and statistical models that can learn from and make predictions on data. Linear regression is also a type of machine-learning algorithm, more specifically a supervised machine-learning algorithm that learns from the labeled datasets and maps the data points to the most optimized linear functions. which can be used for prediction on new datasets. ",
        image: "/img/ml/lr1.jpg",
      },
      {
        title: "Supervised Machine Learning",
        subheading:
          "First of all we should know what supervised machine learning algorithms are. It is a type of machine learning where the algorithm learns from labeled data.  Labeled data means the dataset whose respective target value is already known. There are two types of supervised learning algorithms: Regression and Classification.",
        content: [
          {
            title: "Classification",
            content:
              "Supervised learning's classification tasks are like sorting mail. Algorithms learn from labeled examples (spam/not spam emails) and predict categories for new data (yes/no for spam). This is similar to image recognition (cat, dog) or fraud detection (fraudulent/legitimate transactions). The key is labeled data with predefined categories. The model then sorts unseen data into these categories, making classification a powerful tool for organizing information.",
          },
          {
            title: "Regression",
            content:
              "Unlike classification with its predefined buckets, regression in supervised learning deals with predicting continuous values. Think weather forecasting (temperature) or stock price prediction (price in dollars). The model learns from labeled data where each point has a numerical value. By understanding these relationships, it estimates values for new data. This makes regression powerful for tasks like weather forecasting or sales prediction, where pinpointing a specific number is key.",
          },
        ],
      },
      {
        title: "Importance of Linear Regression",
        content:
          "Linear regression is one of the most fundamental and widely used machine learning algorithms. It is used to establish the relationship between two variables, one independent and the other dependent. The dependent variable is the one whose value needs to be predicted, and the independent variable is the one that helps in making the prediction. The relationship between the two variables is established by fitting a straight line to the data points. This line is called the regression line, and it is used to predict the value of the dependent variable for any given value of the independent variable. Linear regression is used in various fields like finance, economics, marketing, and healthcare to make predictions and decisions based on data.",
      },
      {
        title: "Simple Linear Regression",
        content:
          "In a simple linear regression, there is one independent variable and one dependent variable. The model estimates the slope and intercept of the line of best fit, which represents the relationship between the variables. The slope represents the change in the dependent variable for each unit change in the independent variable, while the intercept represents the predicted value of the dependent variable when the independent variable is zero. Linear regression is a quiet and the simplest statistical regression technique used for predictive analysis in machine learning. Linear regression shows the linear relationship between the independent(predictor) variable i.e. X-axis and the dependent(output) variable i.e. Y-axis, called linear regression. If there is a single input variable X(independent variable), such linear regression is simple linear regression.",
        image: "/img/ml/lr2.jpeg",
      },
      {
        title: "Goal of Linear Regression",
        content:
          "The goal of the linear regression algorithm is to get the best values for B0 and B1 to find the best fit line. The best fit line is a line that has the least error which means the error between predicted values and actual values should be minimum.",
      },
      {
        title: "Terms used in Linear Regression",
        content: [
          {
            title: "Residuals",
            content:
              "In regression, the difference between the observed value of the dependent variable   (yi) and the predicted value(predicted) is called the residuals. In simple terms, the best-fit line is a line that fits the given scatter plot in the best way. Mathematically, the best-fit line is obtained by minimizing the Residual Sum of Squares (RSS).",
            icon: <img src="/img/ml/lr6.png"></img>,
          },
          {
            title: "Ordinary Least Squares",
            content:
              "In linear regression, Ordinary Least Squares (OLS) is a workhorse technique for estimating the coefficients of the model. It achieves this by minimizing the sum of squared errors between the actual values and the values predicted by the model. In simpler terms, OLS finds the straight line that best fits the data by reducing the overall squared difference between the data points and that line.",
            icon: <img src="/img/ml/lr3.png"></img>,
          },
          {
            title: "Coefficient of Determination (R^2)",
            content:
              "The coefficient of determination, denoted as R^2, is a statistical measure that represents the proportion of the variance for a dependent variable that's explained by an independent variable or variables in a regression model. It ranges from 0 to 1, with 1 indicating a perfect fit. In linear regression, R^2 is used to evaluate the model's performance and how well it explains the variance in the data. Value between 0.7 to 0.9 is preferred. It is calculated as 1 - (RSS/TSS) where RSS is the Residual Sum of Squares and TSS is the Total Sum of Squares.",
            icon: <img src="/img/ml/lr5.jpeg"></img>,
          },
        ],
      },
      {
        title: "Cost Function",
        content: [
          {
            title: "Function and Purpose",
            content:
              "The cost function, also known as loss function, measures how well a linear regression model fits the training data. In simpler terms, it calculates the difference between the model's predicted values and the actual values for the dependent variable.",
          },
          {
            title: "Minimization Goal",
            content:
              "The core objective in linear regression is to minimize the cost function. By doing this, we find the best-fit line (represented by the model's equation) that minimizes the overall prediction errors across the training data.",
          },
          {
            title: "Common Cost Function: Mean Squared Error (MSE)",
            content:
              "In linear regression, Mean Squared Error (MSE) is a widely used cost function. It calculates the average squared difference  between the predicted values (Y predicted) and the actual values (Y actual) for each data point.",
          },
          {
            title: "Understanding MSE",
            content:
              "A lower MSE value indicates a better fit, signifying that the model's predictions are on average closer to the actual values. Conversely, a higher MSE signifies larger prediction errors and a poorer fit.",
          },
          {
            title: "Cost Function and Learning",
            content:
              "During training, the model iteratively adjusts its parameters (slope and intercept) to minimize the cost function (MSE in this case). By minimizing the MSE, the model learns to fit a line that best represents the underlying relationship between the independent and dependent variables in the data.",
          },
          {
            title: "Impact on Predictions",
            content:
              "A well-optimized cost function (minimized MSE) leads to a linear regression model that can make more accurate predictions on new, unseen data.",
          },
        ],
      },
      {
        title: "Gradient Descent",
        content: [
          {
            title: "What it is",
            content:
              "Gradient descent is an iterative optimization algorithm used to find the best-fit line for a dataset in linear regression. It aims to minimize a cost function, which represents the difference between the predicted values by the model and the actual values.",
          },
          {
            title: "How it works",
            content:
              "It starts with initial guesses for the model's parameters (slope and intercept). It calculates the gradient of the cost function, which points in the direction of steepest descent. It takes small steps (determined by a learning rate) in the direction opposite the gradient, effectively moving downhill in the cost function landscape. This process repeats iteratively until the cost function converges to a minimum, indicating the best-fit line.",
          },
          {
            title: "Benefits",
            content:
              "Gradient descent is a versatile tool applicable to various machine learning problems beyond linear regression. It's efficient for finding solutions even when there's no closed-form solution available.",
          },
          {
            title: "Things to consider",
            content:
              "Choosing the right learning rate is crucial. A small learning rate leads to slow convergence, while a large one might cause the algorithm to overshoot the minimum. Gradient descent can get stuck in local minima, especially with complex data.",
          },
        ],
        image: (
          <img
            src="/img/ml/lr4.jpeg"
            className="h-[400px] w-[600px] object-cover object-center sm:h-auto sm:w-auto"
          ></img>
        ),
      },
      {
        title: "Assumptions of linear regression",
        content: [
          {
            title: "Linearity",
            content:
              "The relationship between the independent variable(s) and the dependent variable must be linear. This means a straight line can best represent the association between them.",
          },
          {
            title: "Independence",
            content:
              "The observations (data points) must be independent of each other. There shouldn't be any inherent relationship between one data point and another.",
          },
          {
            title: "Homoscedasticity",
            content:
              "The variance of the residuals (errors between predicted and actual values) should be constant across all levels of the independent variable(s). In simpler terms, the spread of the residuals around the regression line should be consistent.",
          },
          {
            title: "Normality of Errors",
            content:
              "The residuals (errors) are assumed to follow a normal distribution. This allows for statistical tests and interpretation of the model's significance.",
          },
          {
            title: "No Multicollinearity",
            content:
              "There shouldn't be high correlation among the independent variables themselves. When independent variables are highly correlated, it can be difficult to isolate the effect of each one on the dependent variable.",
          },
          {
            title: "No Autocorrelation",
            content:
              "The residuals shouldn't be serially correlated. This means the error term for one observation shouldn't be dependent on the error terms of other observations.",
          },
        ],
      },
      {
        title: "Sample Code",
        content:
          "import numpy as np<br/>import matplotlib.pyplot as plt<br/>import pandas as pd<br/># Read the data<br/>advertising = pd.DataFrame(pd.read_csv('LinearRegression/advertising.csv'))<br/><br/>#Model Building<br/>X = advertising['TV']<br/>y = advertising['Sales']<br/>X = X.values.reshape(-1,1)<br/>y = y.values.reshape(-1,1)<br/><br/>from sklearn.model_selection import train_test_split<br/>X_train, X_test, y_train, y_test = train_test_split(X, y, train_size=0.7, random_state=100)<br/># Building a Linear Model<br/>from sklearn.linear_model import LinearRegression<br/>regr = LinearRegression()<br/>regr.fit(X_train, y_train)<br/>score = (regr.score(X_test, y_test))<br/><br/><br/># Predictions<br/>y_pred = regr.predict(X_test)<br/>plt.scatter(X_test, y_test, color ='b')<br/>plt.plot(X_test, y_pred, color ='k')<br/>plt.title('TV vs Sales with R^2 score of {}'.format(score))<br/>plt.show()<br/>",
        output: "/img/ml/lrOutput.png",
      },
      {
        title: "Applications of Linear Regression",
        content: [
          {
            title: "Predicting user churn",
            content:
              "By analyzing user data like time spent on the platform, features used, and purchase history, linear regression models can identify users at risk of churning. This allows companies to take proactive steps to retain them.",
            icon: (
              <FaUser style={{ fontSize: "80px", color: "rgb(225,150,83)" }} />
            ),
          },
          {
            title: "Optimizing ad targeting",
            content:
              "Using data on demographics, interests, and past clicks, linear regression models can predict which users are most likely to respond to specific ads. This helps companies target their advertising campaigns more effectively.",
            icon: (
              <TbTargetArrow
                style={{ fontSize: "80px", color: "rgb(225,150,83)" }}
              />
            ),
          },
          {
            title: "Personalization",
            content:
              "Analyzing user behavior data can help predict user preferences for content, products, or features. This enables companies to personalize user experiences, boosting engagement.",
            icon: (
              <PiPersonArmsSpreadFill
                style={{ fontSize: "80px", color: "rgb(225,150,83)" }}
              />
            ),
          },
          {
            title: "Identifying fraudulent transactions",
            content:
              "By analyzing historical data on legitimate transactions, linear regression models can be used to identify transactions with characteristics that deviate from the norm, potentially indicating fraud.",
            icon: (
              <TbCurrencyDollarOff
                style={{ fontSize: "80px", color: "rgb(225,150,83)" }}
              />
            ),
          },
          {
            title: "Network performance analysis",
            content:
              "Analyzing data on network traffic and latency, linear regression models can help identify bottlenecks and predict potential issues. This facilitates proactive network optimization.",
            icon: (
              <FaNetworkWired
                style={{ fontSize: "80px", color: "rgb(225,150,83)" }}
              />
            ),
          },
          {
            title: "Application performance monitoring",
            content:
              "By analyzing data on application response times and resource usage, companies can use linear regression to identify performance bottlenecks within applications and optimize them.",
            icon: (
              <GrPerformance
                style={{ fontSize: "80px", color: "rgb(225,150,83)" }}
              />
            ),
          },
        ],
      },
    ],
  },
];

export default Data;
