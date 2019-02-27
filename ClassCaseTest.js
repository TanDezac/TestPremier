/* Déclaration des classes */

public class Animal
 {
   /**
   * Nom de l'Animal
   */
   protected String nom;
   /**
    * Cri de l'Animal
    */
   protected Son cri;

    /**
     * Constructeur de la classe Animal
     */
   public Animal(String nom, String sonChemin) {
       this.nom = nom; 
       this.cri = new Son(sonChemin); 
   }
   
   /**
    * Returne le Nom de l'Animal
    */ 
   public String nom(){
       return this.nom;
   }
   /**
    * Returne le cri de l'Animal
    */
   public Son cri(){
       return this.cri; 
   }
 }

public class Son
 {
    /**
     * Nom du fichier son
     */ 
   private String nomFichier;
   
   /**
    * Constructeur
    */
   public Son(String fichier)
    {
       this.nomFichier = fichier;
    }
    /**
     * Permet une lecture du Son
     */
   public void lire() { ... }
   
   /** 
    * Arrete la lecture du Son
    */
   public void stop() { ... }
 }


public class Chat extends Animal                //Héritage
 { 
   /**
    * Constructeur
    */
   public Chat(String nom) 
    {
       super(nom, "miaulement.ogg");           //Appel du Constructeur d'Animal
    }
 }

public class Animalerie
{
   
   /**
    * Liste de tous les Animaux
    */
  private LinkedList<Animal> members;
  
  /**
   * Constructeur
   */
  public Animalerie(){
      this.members = new LinkedList<Animal>();   //Agrégation
  }
  
  /**
   * Ajout d'un Animal dans l'Animalerie
   */ 
  public void ajouteAnimal(Animal monanimal) {
      members.add(monanimal);
  }
};
