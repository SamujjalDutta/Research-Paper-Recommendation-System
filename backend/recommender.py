from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
# Load Dataset
df = pd.read_csv("data/papers.csv")
print(df.head())

# Combining title and abstract into one column
df["content"] = df["title"] + " " + df["abstract"]

print(df["content"].head())


# Creating TF-IDF vectorizer
vectorizer = TfidfVectorizer(stop_words="english")

# Converting text into numerical vectors
tfidf_matrix = vectorizer.fit_transform(df["content"])

# Printing shape of the matrix
print(tfidf_matrix.shape)


# Calculating similarity matrix
similarity_matrix = cosine_similarity(tfidf_matrix)

print(similarity_matrix)
