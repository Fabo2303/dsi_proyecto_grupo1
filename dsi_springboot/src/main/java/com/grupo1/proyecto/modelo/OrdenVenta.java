package com.grupo1.proyecto.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity @Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class OrdenVenta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idOrdenVenta;
    private Long cliente;
    private Long producto;
    private Long metodoPago;
    private float monto;
}
