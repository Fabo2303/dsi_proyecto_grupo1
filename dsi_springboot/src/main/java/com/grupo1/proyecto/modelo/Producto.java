package com.grupo1.proyecto.modelo;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor @ToString
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProducto;
    private String nombre;
    private BigDecimal precio;
    private int unidadMedida;
    private Long promocion;
    private String marca;
    private String imagen;
    private boolean estado;
    private boolean eliminado;
}
